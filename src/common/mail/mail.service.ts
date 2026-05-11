import { Resend } from 'resend';

import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';

import { AgencyMemberAddedEmailTemplate } from './templates/agency-member-added-email.template';
import { AgencyMemberDeactivatedEmailTemplate } from './templates/agency-member-deactivated-email.template';
import { AgencyOnboardingAdminEmailTemplate } from './templates/agency-onboarding-admin-email.template';
import { AgencyOnboardingReceivedEmailTemplate } from './templates/agency-onboarding-received-email.template';
import { AgencyStatusEmailTemplate } from './templates/agency-status-email.template';
import { AgentPropertyAssignmentEmailTemplate } from './templates/agent-property-assignment-email.template';
import { ApplicationStatusEmailTemplate } from './templates/application-status-email.template';
import { LeaseAgreementReadyEmailTemplate } from './templates/lease-agreement-ready-email.template';
import { LeaseAgreementSignedEmailTemplate } from './templates/lease-agreement-signed-email.template';
import { OfferCreatedEmailTemplate } from './templates/offer-created-email.template';
import { PasswordResetEmailTemplate } from './templates/password-reset-email.template';
import { PaymentSuccessEmailTemplate } from './templates/payment-success-email.template';
import { VerifyEmailTemplate } from './templates/verify-email.template';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly resend = new Resend(process.env.RESEND_API_KEY);

  constructor() {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is missing');
    }
  }

  async sendVerificationEmail(to: string, fullName: string, token: string) {
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3001';
    const verifyUrl = `${frontendUrl}/verify-email?token=${token}`;

    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { data, error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: 'Real estate - Verify your email',
      react: VerifyEmailTemplate({ fullName, verifyUrl }),
    });

    if (error) {
      this.logger.error(`Failed to send verification email to ${to}: ${error.message}`);
      throw new InternalServerErrorException('Failed to send verification email');
    }

    this.logger.log(`Verification email sent successfully. Email ID: ${data?.id ?? 'unknown'}`);

    if (process.env.NODE_ENV === 'development') {
      /****** ONLY FOR DEVELOPMENT MODE TO SEE TEST THE TOKEN *****/
      // this.logger.log(`DEV Verification token: ${token}`);
      // this.logger.log(`DEV intended recipient: ${to}`);
      // this.logger.log(`DEV actual recipient used: ${recipient}`);
      this.logger.log(`DEV verification link: ${verifyUrl}`);
    }
  }

  async sendApplicationStatusEmail(
    to: string,
    fullName: string,
    propertyTitle: string,
    status: 'APPROVED' | 'REJECTED',
  ) {
    const subject =
      status === 'APPROVED'
        ? 'Your property application has been approved'
        : 'Your property application has been rejected';

    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject,
      react: ApplicationStatusEmailTemplate({ fullName, propertyTitle, status }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send application status email');
    }
  }

  async sendAgencyOnboardingReceivedEmail(to: string, contactName: string, agencyName: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: 'Your agency onboarding request has been received',
      react: AgencyOnboardingReceivedEmailTemplate({ contactName, agencyName }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send agency onboarding confirmation email');
    }
  }

  async sendAdminAgencyOnboardingNotification(agencyName: string, contactName: string, contactEmail: string) {
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;

    if (!adminEmail) {
      return;
    }

    const recipient =
      process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : adminEmail;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: 'New agency onboarding request submitted',
      react: AgencyOnboardingAdminEmailTemplate({ agencyName, contactName, contactEmail }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send admin agency onboarding notification');
    }
  }

  async sendAgencyApprovedEmail(to: string, contactName: string, agencyName: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: 'Your agency has been approved',
      react: AgencyStatusEmailTemplate({ contactName, agencyName, status: 'APPROVED' }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send agency approved email');
    }
  }

  async sendAgencyRejectedEmail(to: string, contactName: string, agencyName: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: 'Your agency onboarding request was not approved',
      react: AgencyStatusEmailTemplate({ contactName, agencyName, status: 'REJECTED' }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send agency rejected email');
    }
  }

  async sendAgencySuspendedEmail(to: string, contactName: string, agencyName: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: 'Your agency account has been suspended',
      react: AgencyStatusEmailTemplate({ contactName, agencyName, status: 'SUSPENDED' }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send agency suspended email');
    }
  }

  async sendAgencyMemberAddedEmail(
    to: string,
    fullName: string,
    agencyName: string,
    role: string,
    temporaryPassword: string,
  ) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: `You have been added to ${agencyName}`,
      react: AgencyMemberAddedEmailTemplate({ fullName, agencyName, role, temporaryPassword }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send agency member added email');
    }
  }

  async sendAgentAssignedToPropertyEmail(to: string, fullName: string, propertyTitle: string, agencyName: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: `You have been assigned to ${propertyTitle}`,
      react: AgentPropertyAssignmentEmailTemplate({ fullName, propertyTitle, agencyName, action: 'ASSIGNED' }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send property assignment email');
    }
  }

  async sendAgentRemovedFromPropertyEmail(to: string, fullName: string, propertyTitle: string, agencyName: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: `You have been removed from ${propertyTitle}`,
      react: AgentPropertyAssignmentEmailTemplate({ fullName, propertyTitle, agencyName, action: 'REMOVED' }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send property removal email');
    }
  }

  async sendPasswordResetEmail(to: string, fullName: string, resetUrl: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: 'Reset your password',
      react: PasswordResetEmailTemplate({ fullName, resetUrl }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send password reset email');
    }
  }

  async sendAgencyMemberDeactivatedEmail(to: string, fullName: string, agencyName: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: 'You have been removed from the agency',
      react: AgencyMemberDeactivatedEmailTemplate({ fullName, agencyName }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send agency member deactivated email');
    }
  }

  async sendOfferCreatedEmail(to: string, fullName: string, propertyTitle: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      // replyTo: process.env.MAIL_REPLY_TO,
      subject: 'You have received a rental offer',
      react: OfferCreatedEmailTemplate({ fullName, propertyTitle }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send offer email');
    }
  }

  async sendPaymentSuccessEmail(to: string, fullName: string, propertyTitle: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: 'Payment Confirmed — Property Secured',
      react: PaymentSuccessEmailTemplate({ fullName, propertyTitle }),
    });
  }

  async sendLeaseAgreementReadyEmail(to: string, fullName: string, propertyTitle: string, agreementUrl?: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      // replyTo: process.env.MAIL_REPLY_TO,
      subject: 'Your Lease Agreement is Ready',
      react: LeaseAgreementReadyEmailTemplate({ fullName, propertyTitle, agreementUrl }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send lease agreement ready email');
    }
  }

  async sendLeaseAgreementSignedConfirmationEmail(to: string, fullName: string, propertyTitle: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      // replyTo: process.env.MAIL_REPLY_TO,
      subject: 'Lease Agreement Completed',
      react: LeaseAgreementSignedEmailTemplate({ fullName, propertyTitle }),
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send signed confirmation email');
    }
  }
}
