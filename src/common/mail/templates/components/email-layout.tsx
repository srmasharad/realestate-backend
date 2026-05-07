import { Body, Container, Head, Hr, Html, Preview, Section, Text } from '@react-email/components';

type EmailLayoutProps = {
  preview: string;
  children: React.ReactNode;
};

export function EmailLayout({ preview, children }: EmailLayoutProps) {
  return (
    <Html>
      <Head />

      <Preview>{preview}</Preview>

      <Body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: '#f6f7f9',
          fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
        }}
      >
        <Container
          style={{
            maxWidth: '600px',
            margin: '40px auto',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid #e5e7eb',
          }}
        >
          {/* Header */}
          <Section
            style={{
              padding: '32px 40px 24px',
              borderBottom: '1px solid #f3f4f6',
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: '24px',
                fontWeight: 700,
                color: '#111827',
                letterSpacing: '-0.5px',
              }}
            >
              MyRealEstate
            </Text>

            <Text
              style={{
                margin: '8px 0 0',
                fontSize: '14px',
                color: '#6b7280',
              }}
            >
              Premium Property Platform
            </Text>
          </Section>

          {/* Content */}
          <Section
            style={{
              padding: '40px',
            }}
          >
            {children}
          </Section>

          {/* Footer */}
          <Hr
            style={{
              borderColor: '#f3f4f6',
              margin: 0,
            }}
          />

          <Section
            style={{
              padding: '24px 40px 40px',
            }}
          >
            <Text
              style={{
                margin: 0,
                fontSize: '13px',
                lineHeight: '22px',
                color: '#6b7280',
              }}
            >
              This email was sent by MyRealEstate Property Platform.
            </Text>

            <Text
              style={{
                margin: '8px 0 0',
                fontSize: '13px',
                lineHeight: '22px',
                color: '#9ca3af',
              }}
            >
              © {new Date().getFullYear()} MyRealEstate. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
