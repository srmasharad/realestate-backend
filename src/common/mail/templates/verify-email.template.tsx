import { Section, Text } from '@react-email/components';

import { EmailButton } from './components/email-button';
import { EmailLayout } from './components/email-layout';

type VerifyEmailTemplateProps = {
  fullName: string;
  verifyUrl: string;
};

export function VerifyEmailTemplate({ fullName, verifyUrl }: VerifyEmailTemplateProps) {
  return (
    <EmailLayout preview="Verify your email address to activate your account.">
      <Text
        style={{
          margin: '0 0 12px',
          fontSize: '28px',
          lineHeight: '36px',
          fontWeight: 700,
          color: '#111827',
          letterSpacing: '-0.6px',
        }}
      >
        Verify your email address
      </Text>

      <Text
        style={{
          margin: '0 0 24px',
          fontSize: '16px',
          lineHeight: '26px',
          color: '#374151',
        }}
      >
        Hello {fullName},
      </Text>

      <Text
        style={{
          margin: '0 0 24px',
          fontSize: '15px',
          lineHeight: '26px',
          color: '#4b5563',
        }}
      >
        Thank you for creating your account with MyRealEstate. Please verify your email address so we can secure your
        account and activate access to your property dashboard.
      </Text>

      <Section
        style={{
          margin: '32px 0',
        }}
      >
        <EmailButton href={verifyUrl}>Verify email address</EmailButton>
      </Section>

      <Text
        style={{
          margin: '0 0 16px',
          fontSize: '14px',
          lineHeight: '24px',
          color: '#6b7280',
        }}
      >
        If the button does not work, copy and paste this link into your browser:
      </Text>

      <Text
        style={{
          margin: '0',
          padding: '14px 16px',
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '10px',
          fontSize: '13px',
          lineHeight: '20px',
          color: '#374151',
          wordBreak: 'break-all',
        }}
      >
        {verifyUrl}
      </Text>

      <Text
        style={{
          margin: '28px 0 0',
          fontSize: '13px',
          lineHeight: '22px',
          color: '#9ca3af',
        }}
      >
        If you did not create this account, you can safely ignore this email.
      </Text>
    </EmailLayout>
  );
}
