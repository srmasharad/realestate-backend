import { Text } from '@react-email/components';

import { EmailLayout } from './components/email-layout';

type Props = {
  contactName: string;
  agencyName: string;
  status: 'APPROVED' | 'REJECTED' | 'SUSPENDED';
};

export function AgencyStatusEmailTemplate({ contactName, agencyName, status }: Props) {
  const title =
    status === 'APPROVED' ? 'Agency approved' : status === 'REJECTED' ? 'Agency onboarding update' : 'Agency suspended';

  const message =
    status === 'APPROVED'
      ? `Your agency ${agencyName} has been approved. You can now continue with agency operations on the platform.`
      : status === 'REJECTED'
        ? `Your agency onboarding request for ${agencyName} was not approved at this stage.`
        : `Your agency ${agencyName} has been suspended. Please contact platform support if you believe this is a mistake.`;

  return (
    <EmailLayout preview={title}>
      <Text style={heading}>{title}</Text>
      <Text style={paragraph}>Hello {contactName},</Text>
      <Text style={paragraph}>{message}</Text>
    </EmailLayout>
  );
}

const heading = { margin: '0 0 16px', fontSize: '26px', fontWeight: 700, color: '#111827' };
const paragraph = { margin: '0 0 20px', fontSize: '15px', lineHeight: '24px', color: '#4b5563' };
