import { Text } from '@react-email/components';

import { EmailLayout } from './components/email-layout';

type Props = {
  fullName: string;
  propertyTitle: string;
};

export function LeaseAgreementSignedEmailTemplate({ fullName, propertyTitle }: Props) {
  return (
    <EmailLayout preview="Your lease agreement has been completed.">
      <Text style={heading}>Lease agreement completed</Text>

      <Text style={paragraph}>Hello {fullName},</Text>

      <Text style={paragraph}>Your lease agreement for {propertyTitle} has been successfully completed.</Text>

      <Text style={paragraph}>
        The agency has confirmed your signed agreement. You will be contacted regarding the next move-in steps.
      </Text>
    </EmailLayout>
  );
}

const heading = { margin: '0 0 16px', fontSize: '26px', fontWeight: 700, color: '#111827' };
const paragraph = { margin: '0 0 18px', fontSize: '15px', lineHeight: '24px', color: '#4b5563' };
