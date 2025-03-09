import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Harbor AI',
    default: 'Harbor AI - Professional AI Solutions',
  },
  description: 'Harbor AI provides professional AI-driven solutions for businesses of all sizes.',
  keywords: ['AI', 'artificial intelligence', 'business solutions', 'automation', 'Harbor AI'],
  authors: [{ name: 'Harbor AI Team' }],
  creator: 'Harbor AI',
  publisher: 'Harbor AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}