import { Request } from 'express';
import { MailService } from 'src/common/mail/mail.service';
import { addMonths } from 'src/common/utils/date.utils';
import { PrismaService } from 'src/database/prisma.service';
import { PaymentRequestStatus } from 'src/generated/prisma';
import Stripe from 'stripe';

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { AuthenticatedUser } from '../auth/types/authenticated-user.type';

type StripeWebhookEvent = {
  type: string;

  data: {
    object: unknown;
  };
};

type StripeCheckoutSessionLike = {
  metadata?: {
    paymentRequestId?: string | null;
  } | null;
};

@Injectable()
export class PaymentsService {
  private readonly stripe: InstanceType<typeof Stripe>;

  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('STRIPE_SECRET_KEY is not defined in environment variables');
    }

    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  }

  async createCheckoutSession(currentUser: AuthenticatedUser, paymentRequestId: string) {
    const paymentRequest = await this.prisma.paymentRequest.findFirst({
      where: {
        id: paymentRequestId,
        applicantId: currentUser.id,
      },
      select: {
        id: true,
        status: true,
        totalAmount: true,
        property: {
          select: {
            title: true,
          },
        },
      },
    });

    if (!paymentRequest) {
      throw new NotFoundException('Payment request not found');
    }

    if (paymentRequest.status !== PaymentRequestStatus.PENDING) {
      throw new BadRequestException('Only pending payment requests can be paid');
    }

    const amountInCents = Math.round(Number(paymentRequest.totalAmount) * 100);

    const session = await this.stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'aud',
            unit_amount: amountInCents,
            product_data: {
              name: `Rental Payment for - ${paymentRequest.property.title}`,
              description: 'Bond and advance rent payment',
            },
          },
        },
      ],
      success_url: `${process.env.STRIPE_SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
      metadata: {
        paymentRequestId: paymentRequest.id,
        userId: currentUser.id,
      },
    });

    return {
      checkoutUrl: session.url,
      sessionId: session.id,
    };
  }

  async handleWebhook(req: Request) {
    const signature = req.headers['stripe-signature'] as string;

    if (!signature || Array.isArray(signature)) {
      throw new BadRequestException('Missing or invalid Stripe signature');
    }

    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      throw new BadRequestException('Stripe webhook secret is not configured');
    }

    let event: StripeWebhookEvent;

    try {
      event = this.stripe.webhooks.constructEvent(
        req.body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET,
      ) as StripeWebhookEvent;
    } catch {
      throw new BadRequestException('Invalid webhook signature');
    }

    // ONLY handle successful payments
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as StripeCheckoutSessionLike;

      const paymentRequestId = session.metadata?.paymentRequestId;

      if (!paymentRequestId) return { received: true };

      await this.handleSuccessfulPayment(paymentRequestId);
    }

    return { received: true };
  }

  async handleSuccessfulPayment(paymentRequestId: string) {
    const paymentRequest = await this.prisma.paymentRequest.findUnique({
      where: { id: paymentRequestId },
      include: {
        offer: true,
        property: true,
        applicant: true,
      },
    });

    if (!paymentRequest) {
      throw new NotFoundException('Payment request not found');
    }

    // Security check (VERY IMPORTANT)
    if (paymentRequest.status !== 'PENDING') return;

    if (paymentRequest.offer.status !== 'ACCEPTED') {
      throw new BadRequestException('Offer not accepted');
    }

    const leaseEndDate = addMonths(paymentRequest.offer.leaseStartDate, paymentRequest.offer.leaseMonths);

    await this.prisma.$transaction(async (tx) => {
      // Mark payment as PAID
      await tx.paymentRequest.update({
        where: { id: paymentRequestId },
        data: {
          status: 'PAID',
          paidAt: new Date(),
        },
      });

      // Lock property
      await tx.property.update({
        where: { id: paymentRequest.propertyId },
        data: {
          isLocked: true,
        },
      });

      // Reject other applications
      await tx.application.updateMany({
        where: {
          propertyId: paymentRequest.propertyId,
          NOT: {
            id: paymentRequest.applicantId,
          },
        },
        data: {
          status: 'REJECTED',
        },
      });

      await tx.leaseAgreement.upsert({
        where: {
          offerId: paymentRequest.offerId,
        },
        update: {
          leaseStartDate: paymentRequest.offer.leaseStartDate,
          leaseEndDate,
          leaseMonths: paymentRequest.offer.leaseMonths,
          weeklyRent: paymentRequest.offer.weeklyRent,
          bondAmount: paymentRequest.bondAmount,
          advanceRent: paymentRequest.advanceRent,
        },
        create: {
          offerId: paymentRequest.offerId,
          propertyId: paymentRequest.propertyId,
          applicantId: paymentRequest.applicantId,
          status: 'DRAFT',
          leaseStartDate: paymentRequest.offer.leaseStartDate,
          leaseEndDate,
          leaseMonths: paymentRequest.offer.leaseMonths,
          weeklyRent: paymentRequest.offer.weeklyRent,
          bondAmount: paymentRequest.bondAmount,
          advanceRent: paymentRequest.advanceRent,
          createdById: paymentRequest.applicantId,
        },
      });
    });

    // Send confirmation email
    try {
      await this.mailService.sendPaymentSuccessEmail(
        paymentRequest.applicant.email,
        paymentRequest.applicant.fullName,
        paymentRequest.property.title,
      );
    } catch (err) {
      console.error('Payment email failed', err);
    }
  }
}
