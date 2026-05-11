import { Text } from '@react-email/components';

import { EmailLayout } from './components/email-layout';

type Props = {
  agencyName: string;
  contactName: string;
  contactEmail: string;
};

export function AgencyOnboardingAdminEmailTemplate({ agencyName, contactName, contactEmail }: Props) {
  return (
    <EmailLayout preview="A new agency onboarding request has been submitted.">
      <Text style={heading}>New agency onboarding request</Text>

      <Text style={paragraph}>A new agency has submitted an onboarding request and is waiting for admin review.</Text>

      <Text style={box}>
        Agency: {agencyName}
        {'\n'}Contact: {contactName}
        {'\n'}Email: {contactEmail}
        {'\n'}Status: PENDING
      </Text>
    </EmailLayout>
  );
}

const heading = { margin: '0 0 16px', fontSize: '26px', fontWeight: 700, color: '#111827' };
const paragraph = { margin: '0 0 20px', fontSize: '15px', lineHeight: '24px', color: '#4b5563' };
const box = {
  whiteSpace: 'pre-line' as const,
  padding: '16px',
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '10px',
  fontSize: '14px',
  lineHeight: '24px',
  color: '#374151',
};
