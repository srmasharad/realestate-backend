import { Section, Text } from '@react-email/components';

import { EmailButton } from './components/email-button';
import { EmailLayout } from './components/email-layout';

type PasswordResetEmailTemplateProps = {
  fullName: string;
  resetUrl: string;
};

export function PasswordResetEmailTemplate({ fullName, resetUrl }: PasswordResetEmailTemplateProps) {
  return (
    <EmailLayout preview="Reset your MyRealEstate account password.">
      <Text style={{ margin: '0 0 12px', fontSize: '28px', lineHeight: '36px', fontWeight: 700, color: '#111827' }}>
        Reset your password
      </Text>

      <Text style={{ margin: '0 0 24px', fontSize: '16px', lineHeight: '26px', color: '#374151' }}>
        Hello {fullName},
      </Text>

      <Text style={{ margin: '0 0 24px', fontSize: '15px', lineHeight: '26px', color: '#4b5563' }}>
        We received a request to reset the password for your MyRealEstate account. Use the secure button below to
        continue.
      </Text>

      <Section style={{ margin: '32px 0' }}>
        <EmailButton href={resetUrl}>Reset password</EmailButton>
      </Section>

      <Text style={{ margin: '0 0 16px', fontSize: '14px', lineHeight: '24px', color: '#6b7280' }}>
        If the button does not work, copy and paste this link into your browser:
      </Text>

      <Text
        style={{
          margin: 0,
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
        {resetUrl}
      </Text>

      <Text style={{ margin: '28px 0 0', fontSize: '13px', lineHeight: '22px', color: '#9ca3af' }}>
        If you did not request this password reset, you can safely ignore this email.
      </Text>
    </EmailLayout>
  );
}
