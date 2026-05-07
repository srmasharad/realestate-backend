import { Resend } from 'resend';

import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';

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
      html: `
				<h2>Verify your email</h2>

        <p>Hello ${fullName},</p>
        
				<p>Please click the link below to verify your account:</p>
				<p><a href="${verifyUrl}">${verifyUrl}</a></p>
				<p>This link will expire in 24 hours.</p>
			`,
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

    const html =
      status === 'APPROVED'
        ? `
        <h2>Application Approved</h2>
        <p>Hello ${fullName},</p>
        <p>Your application for <strong>${propertyTitle}</strong> has been approved.</p>
        <p>Our team will contact you with the next steps.</p>
      `
        : `
        <h2>Application Update</h2>
        <p>Hello ${fullName},</p>
        <p>Your application for <strong>${propertyTitle}</strong> has not been successful at this stage.</p>
        <p>Thank you for your interest.</p>
      `;

    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject,
      html,
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
      html: `
      <h2>Agency onboarding received</h2>
      <p>Hello ${contactName},</p>
      <p>Your agency onboarding request for <strong>${agencyName}</strong> has been received.</p>
      <p>Your request is currently pending admin review.</p>
      <p>We will notify you again once your agency has been approved or rejected.</p>
    `,
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
      html: `
      <h2>New agency onboarding request</h2>
      <p>A new agency onboarding request has been submitted.</p>
      <p><strong>Agency:</strong> ${agencyName}</p>
      <p><strong>Contact Name:</strong> ${contactName}</p>
      <p><strong>Contact Email:</strong> ${contactEmail}</p>
      <p><strong>Status:</strong> PENDING</p>
    `,
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
      html: `
      <h2>Agency approved</h2>
      <p>Hello ${contactName},</p>
      <p>Your agency <strong>${agencyName}</strong> has been approved.</p>
      <p>You can now continue with agency-related operations on the platform.</p>
    `,
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
      html: `
      <h2>Agency onboarding update</h2>
      <p>Hello ${contactName},</p>
      <p>Your agency onboarding request for <strong>${agencyName}</strong> was not approved.</p>
      <p>If needed, the platform team may contact you with further details.</p>
    `,
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
      html: `
      <h2>Agency suspended</h2>
      <p>Hello ${contactName},</p>
      <p>Your agency <strong>${agencyName}</strong> has been suspended.</p>
      <p>If you believe this is a mistake, please contact platform support.</p>
    `,
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
      html: `
      <h2>Agency account created</h2>
      <p>Hello ${fullName},</p>
      <p>You have been added to <strong>${agencyName}</strong> as <strong>${role}</strong>.</p>
      <p>You can log in using this temporary password:</p>
      <p><strong>${temporaryPassword}</strong></p>
      <p>Please change your password after logging in.</p>
    `,
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
      html: `
      <h2>Property assignment</h2>
      <p>Hello ${fullName},</p>
      <p>You have been assigned to manage <strong>${propertyTitle}</strong> for <strong>${agencyName}</strong>.</p>
    `,
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
      html: `
      <h2>Property assignment removed</h2>
      <p>Hello ${fullName},</p>
      <p>You have been removed from managing <strong>${propertyTitle}</strong> for <strong>${agencyName}</strong>.</p>
    `,
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
      html: `
      <h2>Password Reset Request</h2>
      <p>Hello ${fullName},</p>
      <p>We received a request to reset your password.</p>
      <p>Click the link below to reset your password:</p>
      <p><a href="${resetUrl}">Reset Password</a></p>
      <p>This link will expire soon.</p>
      <p>If you did not request this, you can ignore this email.</p>
    `,
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
      html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>Hello ${fullName},</h2>
        <p>You have been removed from <strong>${agencyName}</strong>.</p>
        <p>If you believe this was a mistake, please contact the agency.</p>
      </div>
    `,
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
      html: `
      <h2>Rental Offer Received</h2>
      <p>Hello ${fullName},</p>
      <p>You have received a rental offer for <strong>${propertyTitle}</strong>.</p>
      <p>Your rental application has progressed to the formal offer stage.</p>
      <p>Please log in to your account to review the rental offer, including rent, bond, advance rent, lease dates, and expiry date.</p>
      <p>You must accept or decline the offer before it expires.</p>
    `,
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send offer email');
    }
  }

  async sendPaymentSuccessEmail(to: string, fullName: string, propertyTitle: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const html = `
    <h2>Payment Confirmed</h2>
    <p>Hi ${fullName},</p>
    <p>Your payment for <strong>${propertyTitle}</strong> has been successfully received.</p>
    <p>The property is now secured for you.</p>
    <p>Next steps:</p>
    <ul>
      <li>Lease agreement will be shared shortly</li>
      <li>Please prepare for move-in</li>
    </ul>
  `;

    await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: 'Payment Confirmed — Property Secured',
      html,
    });
  }

  async sendLeaseAgreementReadyEmail(to: string, fullName: string, propertyTitle: string, agreementUrl?: string) {
    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const linkSection = agreementUrl ? `<p><a href="${agreementUrl}" target="_blank">View Lease Agreement</a></p>` : '';

    const { error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      // replyTo: process.env.MAIL_REPLY_TO,
      subject: 'Your Lease Agreement is Ready',
      html: `
      <h2>Lease Agreement Ready</h2>
      <p>Hello ${fullName},</p>

      <p>Your lease agreement for <strong>${propertyTitle}</strong> is now ready.</p>

      ${linkSection}

      <p>Please review and sign the agreement using the provided link.</p>

      <p>If you have any questions, please contact the agency.</p>

      <br/>
      <p>Thank you,</p>
      <p>Real Estate Team</p>
    `,
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
      html: `
      <h2>Lease Agreement Completed</h2>

      <p>Hello ${fullName},</p>

      <p>Your lease agreement for <strong>${propertyTitle}</strong> has been successfully completed.</p>

      <p>The agency has confirmed your signed agreement.</p>

      <p>You will be contacted regarding the next move-in steps.</p>

      <br />

      <p>Thank you,</p>
      <p>Real Estate Team</p>
    `,
    });

    if (error) {
      throw new InternalServerErrorException('Failed to send signed confirmation email');
    }
  }
}
