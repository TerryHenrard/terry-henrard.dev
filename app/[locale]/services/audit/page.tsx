import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { CalendarClock, ClipboardCheck, FileSearch, Mail, Shield, Sparkles } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';
import CtaTriggerPhoneCallRequest from '@/features/ai/components/cta-trigger-phone-call-request';
import { Link } from '@/features/i18n/lib/navigation';
import GuaranteeHeadline from '@/features/marketing/components/guarantee-headline';

export default async function AuditServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('audit');

  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero */}
        <div className='relative mb-10 overflow-hidden rounded-3xl'>
          <Card className='border-0 bg-transparent'>
            <CardContent className='p-0'>
              <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                <FileSearch className='h-3 w-3' />
                {t('badge')}
              </Badge>
              <h1 className='mb-3 text-4xl font-bold text-balance md:text-6xl'>
                {t('hero.title')}
              </h1>
              <p className='text-foreground/70 text-lg md:text-xl'>{t('hero.description')}</p>
              <GuaranteeHeadline />
            </CardContent>
          </Card>
        </div>

        {/* Offers — minimal */}
        <div className='mb-10 grid gap-6 md:grid-cols-2'>
          {/* MVP Readiness */}
          <Card className='rounded-3xl p-7'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <ClipboardCheck className='text-primary h-6 w-6' />
              </div>
              <div className='mb-1 flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>{t('offers.mvpReadiness.title')}</h2>
                <span className='text-foreground/60 text-sm'>
                  {t('offers.mvpReadiness.duration')}
                </span>
              </div>
              <p className='text-foreground/70 mb-3'>{t('offers.mvpReadiness.description')}</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>
                  {t.rich('offers.mvpReadiness.items.0', {
                    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                  })}
                </li>
                <li>
                  {t.rich('offers.mvpReadiness.items.1', {
                    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                  })}
                </li>
                <li>
                  {t.rich('offers.mvpReadiness.items.2', {
                    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                  })}
                </li>
              </ul>
            </CardContent>
            <CardFooter className='gap-2'>
              <Button asChild>
                <Link href='/services/mvp-foundry'>{t('offers.mvpReadiness.cta.primary')}</Link>
              </Button>
              <CtaTriggerPhoneCallRequest variant='outline' />
            </CardFooter>
          </Card>

          {/* AI Readiness */}
          <Card className='rounded-3xl p-7'>
            <CardContent>
              <div className='bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Sparkles className='text-primary h-6 w-6' />
              </div>
              <div className='mb-1 flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>{t('offers.aiReadiness.title')}</h2>
                <span className='text-foreground/60 text-sm'>
                  {t('offers.aiReadiness.duration')}
                </span>
              </div>
              <p className='text-foreground/70 mb-3'>{t('offers.aiReadiness.description')}</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                <li>
                  {t.rich('offers.aiReadiness.items.0', {
                    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                  })}
                </li>
                <li>
                  {t.rich('offers.aiReadiness.items.1', {
                    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                  })}
                </li>
                <li>
                  {t.rich('offers.aiReadiness.items.2', {
                    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                  })}
                </li>
              </ul>
            </CardContent>
            <CardFooter className='gap-2'>
              <Button asChild>
                <Link href='/services/ai-sprint'>{t('offers.aiReadiness.cta.primary')}</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link href='mailto:terry.henrard@outlook.com'>
                  <Mail className='mr-1' />
                  {t('offers.aiReadiness.cta.secondary')}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* How it works + Guarantees — ultra-compact */}
        <div className='mb-8 grid gap-6 md:grid-cols-3'>
          {[
            { icon: CalendarClock, key: '0' },
            { icon: FileSearch, key: '1' },
            { icon: Shield, key: '2' },
          ].map((item) => (
            <Card key={item.key} className='rounded-3xl p-7'>
              <CardContent>
                <div className='bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-2xl'>
                  <item.icon className='text-primary h-6 w-6' />
                </div>
                <h3 className='mb-1 text-lg font-semibold'>
                  {t(`howItWorks.${item.key}.title` as any)}
                </h3>
                <p className='text-foreground/70'>
                  {t(`howItWorks.${item.key}.description` as any)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <Button asChild>
              <Link href='/services/mvp-foundry'>{t('cta.primary')}</Link>
            </Button>
            <CtaTriggerPhoneCallRequest variant='outline' />
          </div>
          <p className='text-foreground/60 text-sm'>
            {t.rich('cta.footer', {
              link: (chunks: React.ReactNode) => (
                <Link
                  href='/services/care-and-hosting-plan'
                  className='underline underline-offset-4'
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </div>
      </div>
    </main>
  );
}
