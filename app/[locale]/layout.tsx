import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const supportedLocales = ['en', 'es'];

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: {
    template: '%s | Harbor AI',
    default: 'Harbor AI - Professional AI Solutions',
  },
  description: 'Harbor AI provides professional AI-driven solutions for businesses of all sizes.',
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Navbar locale={locale} />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}