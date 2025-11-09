import { getTranslations, setRequestLocale } from 'next-intl/server';

import { CalendarClock, ClipboardCheck, FileSearch, Mail, Shield, Sparkles } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';
import CtaTriggerPhoneCallRequest from '@/features/ai/components/cta-trigger-phone-call-request';
import { Link } from '@/features/i18n/lib/navigation';

export default async function AuditServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as 'en' | 'fr');
  const t = await getTranslations('audit');
  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — Outcomes, not estimates */}
        <div className='relative mb-12 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <FileSearch className='h-3 w-3' />
                  {t('badge')}
                </Badge>
                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  {t('hero.title')}
                </h1>
                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  {t('hero.description')}
                </p>
                <p
                  className='text-foreground/60 mt-3'
                  dangerouslySetInnerHTML={{ __html: t.raw('hero.guarantee') }}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Offers */}
        <div className='mb-12 grid gap-6 md:grid-cols-2'>
          {/* MVP Readiness Plan */}
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <ClipboardCheck className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-1 text-2xl font-bold'>{t('offers.mvpReadiness.title')}</h2>
              <p className='text-foreground/70 mb-4 text-sm'>{t('offers.mvpReadiness.duration')}</p>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                {t('offers.mvpReadiness.description')}
              </p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                {[0, 1, 2, 3, 4].map((i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: t.raw(`offers.mvpReadiness.items.${i}` as any),
                    }}
                  />
                ))}
              </ul>
            </CardContent>
            <CardFooter className='gap-3'>
              <Button asChild>
                <Link href='/services/mvp-foundry'>{t('offers.mvpReadiness.cta.primary')}</Link>
              </Button>
              <CtaTriggerPhoneCallRequest variant={'outline'} />
            </CardFooter>
          </Card>

          {/* AI Readiness Audit */}
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Sparkles className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-1 text-2xl font-bold'>{t('offers.aiReadiness.title')}</h2>
              <p className='text-foreground/70 mb-4 text-sm'>{t('offers.aiReadiness.duration')}</p>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                {t('offers.aiReadiness.description')}
              </p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                {[0, 1, 2, 3, 4].map((i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: t.raw(`offers.aiReadiness.items.${i}` as any),
                    }}
                  />
                ))}
              </ul>
            </CardContent>
            <CardFooter className='gap-3'>
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

        {/* How it works — fast, tangible, risk-first */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          {[
            { icon: CalendarClock, key: '0' },
            { icon: FileSearch, key: '1' },
            { icon: Shield, key: '2' },
          ].map((item) => (
            <Card key={item.key} className='rounded-3xl p-8'>
              <CardContent>
                <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                  <item.icon className='text-primary h-6 w-6' />
                </div>
                <h3 className='mb-2 text-xl font-semibold'>
                  {t(`howItWorks.${item.key}.title` as any)}
                </h3>
                <p className='text-foreground/70 leading-relaxed'>
                  {t(`howItWorks.${item.key}.description` as any)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantees & Availability */}
        <div className='mb-12 grid gap-6 md:grid-cols-2'>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Shield className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>{t('guarantees.riskReversal.title')}</h3>
              <p className='text-foreground/70 leading-relaxed'>
                {t('guarantees.riskReversal.description')}
              </p>
            </CardContent>
          </Card>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <CalendarClock className='text-primary h-6 w-6' />
              </div>
              <h3 className='mb-2 text-xl font-semibold'>{t('guarantees.limitedSlots.title')}</h3>
              <p className='text-foreground/70 leading-relaxed'>
                {t('guarantees.limitedSlots.description')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Next steps — permission-based CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <Button asChild>
              <Link href='/services/mvp-foundry'>{t('cta.primary')}</Link>
            </Button>
            <CtaTriggerPhoneCallRequest variant={'outline'} />
          </div>
          <p
            className='text-foreground/60 text-sm'
            dangerouslySetInnerHTML={{ __html: t.raw('cta.footer') }}
          />
        </div>
      </div>
    </main>
  );
}
