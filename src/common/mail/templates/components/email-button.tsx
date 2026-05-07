import { Button } from '@react-email/components';

type EmailButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function EmailButton({ href, children }: EmailButtonProps) {
  return (
    <Button
      href={href}
      style={{
        backgroundColor: '#111827',
        color: '#ffffff',
        padding: '14px 24px',
        borderRadius: '10px',
        fontSize: '14px',
        fontWeight: 600,
        textDecoration: 'none',
        display: 'inline-block',
      }}
    >
      {children}
    </Button>
  );
}
