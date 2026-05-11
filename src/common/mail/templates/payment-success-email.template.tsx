import { Text } from '@react-email/components';

import { EmailLayout } from './components/email-layout';

type Props = {
  fullName: string;
  propertyTitle: string;
};

export function PaymentSuccessEmailTemplate({ fullName, propertyTitle }: Props) {
  return (
    <EmailLayout preview="Your payment has been confirmed.">
      <Text style={heading}>Payment confirmed</Text>

      <Text style={paragraph}>Hello {fullName},</Text>

      <Text style={paragraph}>Your payment for {propertyTitle} has been successfully received.</Text>

      <Text style={paragraph}>The property is now secured for you. The lease agreement will be shared shortly.</Text>

      <Text style={note}>Please keep this email for your records.</Text>
    </EmailLayout>
  );
}

const heading = { margin: '0 0 16px', fontSize: '26px', fontWeight: 700, color: '#111827' };
const paragraph = { margin: '0 0 18px', fontSize: '15px', lineHeight: '24px', color: '#4b5563' };
const note = { margin: '24px 0 0', fontSize: '13px', lineHeight: '22px', color: '#9ca3af' };
