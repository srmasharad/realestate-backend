import { Text } from '@react-email/components';

import { EmailLayout } from './components/email-layout';

type ApplicationStatusEmailTemplateProps = {
  fullName: string;
  propertyTitle: string;
  status: 'APPROVED' | 'REJECTED';
};

export function ApplicationStatusEmailTemplate({
  fullName,
  propertyTitle,
  status,
}: ApplicationStatusEmailTemplateProps) {
  const isApproved = status === 'APPROVED';

  return (
    <EmailLayout
      preview={
        isApproved ? 'Your property application has been approved.' : 'Your property application has been rejected.'
      }
    >
      <Text style={heading}>{isApproved ? 'Application approved' : 'Application update'}</Text>

      <Text style={paragraph}>Hello {fullName},</Text>

      <Text style={paragraph}>
        {isApproved ? (
          <>
            Your application for <strong>{propertyTitle}</strong> has been approved.
          </>
        ) : (
          <>
            Your application for <strong>{propertyTitle}</strong> was not successful at this stage.
          </>
        )}
      </Text>

      {isApproved ? (
        <Text style={paragraph}>Our team will contact you shortly regarding the next steps.</Text>
      ) : (
        <Text style={paragraph}>Thank you for your interest in the property.</Text>
      )}
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
