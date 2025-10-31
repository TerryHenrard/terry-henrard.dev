import { PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { Locale, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';

import { Toaster } from 'sonner';

import Background from '@/core/components/layouts/background';
import Header from '@/core/components/layouts/header';
import Providers from '@/core/components/providers';
import { routing } from '@/features/i18n/lib/routing';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return {
    title: t('title'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<PropsWithChildren> & {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.variable} min-h-screen pt-16 antialiased`}
      >
        <Providers>
          <Header />
          <Background />
          {children}
          <Toaster position='top-center' />
        </Providers>
      </body>
    </html>
  );
}
