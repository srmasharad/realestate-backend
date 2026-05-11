import { Text } from '@react-email/components';

import { EmailLayout } from './components/email-layout';

type Props = {
  fullName: string;
  propertyTitle: string;
  agencyName: string;
  action: 'ASSIGNED' | 'REMOVED';
};

export function AgentPropertyAssignmentEmailTemplate({ fullName, propertyTitle, agencyName, action }: Props) {
  const assigned = action === 'ASSIGNED';

  return (
    <EmailLayout
      preview={assigned ? 'You have been assigned to a property.' : 'You have been removed from a property.'}
    >
      <Text style={heading}>{assigned ? 'Property assigned' : 'Property assignment removed'}</Text>

      <Text style={paragraph}>Hello {fullName},</Text>

      <Text style={paragraph}>
        {assigned
          ? `You have been assigned to manage ${propertyTitle} for ${agencyName}.`
          : `You have been removed from managing ${propertyTitle} for ${agencyName}.`}
      </Text>
    </EmailLayout>
  );
}

const heading = { margin: '0 0 16px', fontSize: '26px', fontWeight: 700, color: '#111827' };
const paragraph = { margin: '0 0 18px', fontSize: '15px', lineHeight: '24px', color: '#4b5563' };
