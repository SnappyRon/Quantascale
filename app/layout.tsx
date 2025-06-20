import type { Metadata } from 'next';
import './globals.css';
import SpeedInsightsWrapper from '../components/SpeedInsightsWrapper';

export const metadata: Metadata = {
  title: 'QuantaScale | Precision Systems. Scalable Growth.',
  description: 'Client acquisition systems powered by LinkedIn, AI SEO, and automation.',
  icons: {
    icon: '/favicon-16x16.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsightsWrapper />
      </body>
    </html>
  );
}
