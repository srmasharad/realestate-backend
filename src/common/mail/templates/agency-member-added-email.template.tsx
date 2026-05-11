import { Text } from '@react-email/components';

import { EmailLayout } from './components/email-layout';

type Props = {
  fullName: string;
  agencyName: string;
  role: string;
  temporaryPassword: string;
};

export function AgencyMemberAddedEmailTemplate({ fullName, agencyName, role, temporaryPassword }: Props) {
  return (
    <EmailLayout preview={`You have been added to ${agencyName}.`}>
      <Text style={heading}>Agency account created</Text>

      <Text style={paragraph}>Hello {fullName},</Text>

      <Text style={paragraph}>
        You have been added to {agencyName} as {role}.
      </Text>

      <Text style={paragraph}>Use this temporary password to log in:</Text>

      <Text style={box}>{temporaryPassword}</Text>

      <Text style={note}>Please change your password after logging in.</Text>
    </EmailLayout>
  );
}

const heading = { margin: '0 0 16px', fontSize: '26px', fontWeight: 700, color: '#111827' };
const paragraph = { margin: '0 0 18px', fontSize: '15px', lineHeight: '24px', color: '#4b5563' };
const box = {
  padding: '14px 16px',
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '10px',
  fontSize: '18px',
  fontWeight: 700,
  color: '#111827',
  letterSpacing: '0.4px',
};
const note = { margin: '24px 0 0', fontSize: '13px', lineHeight: '22px', color: '#9ca3af' };
