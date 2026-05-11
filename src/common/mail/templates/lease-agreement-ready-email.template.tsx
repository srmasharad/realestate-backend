import { Section, Text } from '@react-email/components';

import { EmailButton } from './components/email-button';
import { EmailLayout } from './components/email-layout';

type Props = {
  fullName: string;
  propertyTitle: string;
  agreementUrl?: string;
};

export function LeaseAgreementReadyEmailTemplate({ fullName, propertyTitle, agreementUrl }: Props) {
  return (
    <EmailLayout preview="Your lease agreement is ready.">
      <Text style={heading}>Lease agreement ready</Text>

      <Text style={paragraph}>Hello {fullName},</Text>

      <Text style={paragraph}>Your lease agreement for {propertyTitle} is now ready.</Text>

      {agreementUrl ? (
        <Section style={{ margin: '32px 0' }}>
          <EmailButton href={agreementUrl}>View lease agreement</EmailButton>
        </Section>
      ) : null}

      <Text style={paragraph}>Please review and sign the agreement using the provided link.</Text>

      <Text style={paragraph}>If you have any questions, please contact the agency.</Text>
    </EmailLayout>
  );
}

const heading = { margin: '0 0 16px', fontSize: '26px', fontWeight: 700, color: '#111827' };
const paragraph = { margin: '0 0 18px', fontSize: '15px', lineHeight: '24px', color: '#4b5563' };
