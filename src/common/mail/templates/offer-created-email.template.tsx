import { Section, Text } from '@react-email/components';

import { EmailButton } from './components/email-button';
import { EmailLayout } from './components/email-layout';

type Props = {
  fullName: string;
  propertyTitle: string;
};

export function OfferCreatedEmailTemplate({ fullName, propertyTitle }: Props) {
  const frontendUrl = process.env.FRONTEND_URL ?? 'http://localhost:3001';

  return (
    <EmailLayout preview="You have received a rental offer.">
      <Text style={heading}>Rental offer received</Text>

      <Text style={paragraph}>Hello {fullName},</Text>

      <Text style={paragraph}>You have received a rental offer for {propertyTitle}.</Text>

      <Text style={paragraph}>
        Please review the rent, bond, advance rent, lease dates, and offer expiry before accepting or declining.
      </Text>

      <Section style={{ margin: '32px 0' }}>
        <EmailButton href={`${frontendUrl}/me/offers`}>Review offer</EmailButton>
      </Section>
    </EmailLayout>
  );
}

const heading = { margin: '0 0 16px', fontSize: '26px', fontWeight: 700, color: '#111827' };
const paragraph = { margin: '0 0 18px', fontSize: '15px', lineHeight: '24px', color: '#4b5563' };
