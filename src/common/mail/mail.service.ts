import { Resend } from 'resend';

import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private readonly resend = new Resend(process.env.RESEND_API_KEY);

  async sendVerificationEmail(to: string, token: string) {
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3001';
    const verifyUrl = `${frontendUrl}/verify-email?token=${token}`;

    const recipient = process.env.NODE_ENV === 'development' ? (process.env.MAIL_DEV_TO ?? 'delivered@resend.dev') : to;

    const { data, error } = await this.resend.emails.send({
      from: process.env.MAIL_FROM ?? 'Acme <onboarding@resend.dev>',
      to: [recipient],
      subject: 'Real estate - Verify your email',
      html: `
				<h2>Verify your email</h2>
				<p>Please click the link below to verify your account:</p>
				<p><a href="${verifyUrl}">${verifyUrl}</a></p>
				<p>This link will expire in 24 hours.</p>
			`,
    });

    if (error) {
      this.logger.error(`Failed to send verification email to ${to}: ${error.message}`);
      throw new InternalServerErrorException('Failed to send verification email');
    }

    this.logger.log(`Verification email sent successfully. Email ID: ${data.id ?? 'unknown'}`);

    if (process.env.NODE_ENV === 'development') {
      /****** ONLY FOR DEVELOPMENT MODE TO SEE TEST THE TOKEN *****/
      // this.logger.log(`DEV Verification token: ${token}`);
      // this.logger.log(`DEV intended recipient: ${to}`);
      // this.logger.log(`DEV actual recipient used: ${recipient}`);
      this.logger.log(`DEV verification link: ${verifyUrl}`);
    }
  }
}
