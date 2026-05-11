import { Text } from '@react-email/components';

import { EmailLayout } from './components/email-layout';

type Props = {
  fullName: string;
  agencyName: string;
};

export function AgencyMemberDeactivatedEmailTemplate({ fullName, agencyName }: Props) {
  return (
    <EmailLayout preview={`You have been removed from ${agencyName}.`}>
      <Text style={heading}>Agency access removed</Text>

      <Text style={paragraph}>Hello {fullName},</Text>

      <Text style={paragraph}>Your access to {agencyName} has been removed.</Text>

      <Text style={note}>If you believe this was a mistake, please contact the agency directly.</Text>
    </EmailLayout>
  );
}

const heading = { margin: '0 0 16px', fontSize: '26px', fontWeight: 700, color: '#111827' };
const paragraph = { margin: '0 0 18px', fontSize: '15px', lineHeight: '24px', color: '#4b5563' };
const note = { margin: '24px 0 0', fontSize: '13px', lineHeight: '22px', color: '#9ca3af' };
