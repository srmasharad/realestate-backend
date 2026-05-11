import { Text } from '@react-email/components';

import { EmailLayout } from './components/email-layout';

type AgencyOnboardingReceivedEmailTemplateProps = {
  contactName: string;
  agencyName: string;
};

export function AgencyOnboardingReceivedEmailTemplate({
  contactName,
  agencyName,
}: AgencyOnboardingReceivedEmailTemplateProps) {
  return (
    <EmailLayout preview="Your agency onboarding request has been received.">
      <Text style={heading}>Agency onboarding received</Text>

      <Text style={paragraph}>Hello {contactName},</Text>

      <Text style={paragraph}>
        Your onboarding request for <strong>{agencyName}</strong> has been received successfully.
      </Text>

      <Text style={paragraph}>Your application is currently under admin review.</Text>
      <Text style={paragraph}>We will notify you once your agency has been approved or rejected.</Text>
    </EmailLayout>
  );
}

const heading = {
  fontSize: '28px',
  fontWeight: '700',
  color: '#111827',
  marginBottom: '24px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#374151',
  marginBottom: '18px',
};
