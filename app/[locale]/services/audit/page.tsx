import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import {
  BarChart3,
  CalendarClock,
  ClipboardCheck,
  FileSearch,
  Lightbulb,
  Mail,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent } from '@/core/components/ui/card';
import CtaTriggerPhoneCallRequest from '@/features/ai/components/cta-trigger-phone-call-request';
import { Link } from '@/features/i18n/lib/navigation';
import FAQCard from '@/features/marketing/components/faq-card';
import GlossaryAccordion from '@/features/marketing/components/glossary-accordion';

export default async function AuditServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('audit');

  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 mx-auto max-w-6xl py-8 sm:py-12 lg:py-16'>
        {/* Hero — Value proposition */}
        <div className='relative mb-8 overflow-hidden rounded-3xl sm:mb-12 lg:mb-16'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div className='flex flex-col items-center text-center md:items-start md:text-left'>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <FileSearch className='h-3 w-3' />
                  {t('badge')}
                </Badge>
                <h1 className='mb-4 text-3xl font-bold text-balance sm:text-4xl md:text-5xl lg:text-6xl'>
                  {t('hero.title')}
                </h1>
                <p className='text-primary mb-3 text-xl font-semibold sm:text-2xl md:text-3xl'>
                  {t('hero.subtitle')}
                </p>
                <p className='text-foreground/70 text-base leading-relaxed text-pretty sm:text-lg md:text-xl'>
                  {t('hero.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What I evaluate */}
        <div className='mb-10 sm:mb-12'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>
            {t('whatIsIncluded.title')}
          </h2>
          <div className='grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {[
              { icon: Target, key: '0' },
              { icon: BarChart3, key: '1' },
              { icon: Sparkles, key: '2' },
              { icon: CalendarClock, key: '3' },
              { icon: ShieldCheck, key: '4' },
            ].map((item) => (
              <Card
                key={item.key}
                className='rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8'
              >
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                    <item.icon className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                  </div>
                  <h3 className='mb-2 text-lg font-semibold sm:text-xl'>
                    {t(`whatIsIncluded.items.${item.key}.title` as any)}
                  </h3>
                  <p className='text-foreground/70 text-sm leading-relaxed sm:text-base'>
                    {t(`whatIsIncluded.items.${item.key}.description` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What you get */}
        <div className='mb-10 sm:mb-12'>
          <Card className='bg-primary/5 border-primary/20 rounded-3xl border-2 p-6 sm:p-8'>
            <CardContent className='p-0'>
              <div className='mb-4 flex flex-col gap-3 sm:flex-row sm:items-center'>
                <div className='bg-primary flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                  <Lightbulb className='h-5 w-5 text-white sm:h-6 sm:w-6' />
                </div>
                <h2 className='text-xl font-bold sm:text-2xl'>{t('whatYouGet.title')}</h2>
              </div>
              <p className='mb-4 text-base font-medium sm:text-lg'>{t('whatYouGet.description')}</p>
              <p className='text-foreground/70 text-base leading-relaxed sm:text-lg'>
                {t('whatYouGet.summary')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Offers — detailed */}
        <div className='mb-10 sm:mb-12'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>{t('offers.title')}</h2>
          <div className='grid gap-4 sm:gap-6 md:grid-cols-2'>
            {/* MVP Readiness */}
            <Card className='rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7'>
              <CardContent className='p-0'>
                <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                  <ClipboardCheck className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                </div>
                <div className='mb-3 flex flex-col gap-2 sm:mb-2 sm:flex-row sm:items-start sm:justify-between'>
                  <h3 className='text-xl font-bold sm:text-2xl'>
                    {t('offers.mvpReadiness.title')}
                  </h3>
                  <div className='text-left sm:text-right'>
                    <div className='text-foreground/60 text-sm'>
                      {t('offers.mvpReadiness.duration')}
                    </div>
                  </div>
                </div>
                <p className='text-foreground/70 mb-4 text-sm leading-relaxed sm:text-base'>
                  {t('offers.mvpReadiness.description')}
                </p>
                <div className='mb-4'>
                  <h4 className='mb-2 text-sm font-semibold sm:text-base'>
                    {t('offers.deliverables')}
                  </h4>
                  <ul className='text-foreground/80 list-inside list-disc space-y-2 text-sm sm:text-base'>
                    <li>{t('offers.mvpReadiness.deliverables.0')}</li>
                    <li>{t('offers.mvpReadiness.deliverables.1')}</li>
                    <li>{t('offers.mvpReadiness.deliverables.2')}</li>
                  </ul>
                </div>
                <p className='text-primary mb-4 text-sm font-medium sm:text-base'>
                  {t('offers.mvpReadiness.summary')}
                </p>
                <div className='flex flex-col gap-2 sm:flex-row'>
                  <Button asChild className='w-full sm:w-auto'>
                    <Link href='/services/mvp-foundry'>{t('offers.mvpReadiness.cta.primary')}</Link>
                  </Button>
                  <CtaTriggerPhoneCallRequest variant='outline' className='w-full sm:w-auto' />
                </div>
              </CardContent>
            </Card>

            {/* AI Readiness */}
            <Card className='rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7'>
              <CardContent className='p-0'>
                <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                  <Sparkles className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                </div>
                <div className='mb-3 flex flex-col gap-2 sm:mb-2 sm:flex-row sm:items-start sm:justify-between'>
                  <h3 className='text-xl font-bold sm:text-2xl'>{t('offers.aiReadiness.title')}</h3>
                  <div className='text-left sm:text-right'>
                    <div className='text-foreground/60 text-sm'>
                      {t('offers.aiReadiness.duration')}
                    </div>
                  </div>
                </div>
                <p className='text-foreground/70 mb-4 text-sm leading-relaxed sm:text-base'>
                  {t('offers.aiReadiness.description')}
                </p>
                <div className='mb-4'>
                  <h4 className='mb-2 text-sm font-semibold sm:text-base'>
                    {t('offers.deliverables')}
                  </h4>
                  <ul className='text-foreground/80 list-inside list-disc space-y-2 text-sm sm:text-base'>
                    <li>{t('offers.aiReadiness.deliverables.0')}</li>
                    <li>{t('offers.aiReadiness.deliverables.1')}</li>
                    <li>{t('offers.aiReadiness.deliverables.2')}</li>
                  </ul>
                </div>
                <p className='text-primary mb-4 text-sm font-medium sm:text-base'>
                  {t('offers.aiReadiness.summary')}
                </p>
                <div className='flex flex-col gap-2 sm:flex-row'>
                  <Button asChild className='w-full sm:w-auto'>
                    <Link href='/services/ai-sprint'>{t('offers.aiReadiness.cta.primary')}</Link>
                  </Button>
                  <Button asChild variant='outline' className='w-full sm:w-auto'>
                    <Link href='mailto:terry.henrard@outlook.com'>
                      <Mail className='mr-1' />
                      {t('offers.aiReadiness.cta.secondary')}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Guarantees */}
        <div className='mb-10 sm:mb-12'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>{t('guarantees.title')}</h2>
          <div className='grid gap-4 sm:gap-6 md:grid-cols-2'>
            {[0, 1, 2, 3, 4].map((idx) => (
              <Card
                key={idx}
                className='rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8'
              >
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                    <Shield className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                  </div>
                  <h3 className='mb-2 text-lg font-semibold sm:text-xl'>
                    {t(`guarantees.items.${idx}.title` as any)}
                  </h3>
                  <p className='text-foreground/70 text-sm leading-relaxed sm:text-base'>
                    {t(`guarantees.items.${idx}.description` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <FAQCard
          title={t('faq.title')}
          items={[0, 1, 2, 3, 4].map((idx) => ({
            question: t(`faq.items.${idx}.question` as any),
            answer: t(`faq.items.${idx}.answer` as any),
          }))}
        />

        {/* Glossary */}
        <div className='mb-10 sm:mb-12'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>{t('glossary.title')}</h2>
          <GlossaryAccordion
            items={[0, 1].map((idx) => ({
              term: t(`glossary.items.${idx}.term` as any),
              definition: t(`glossary.items.${idx}.definition` as any),
            }))}
            defaultValue='item-0'
          />
        </div>

        {/* Final CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row'>
            <Button asChild size='lg' className='w-full sm:w-auto'>
              <Link href='/services/mvp-foundry'>{t('cta.primary')}</Link>
            </Button>
            <CtaTriggerPhoneCallRequest
              variant={'outline'}
              size='lg'
              className='w-full sm:w-auto'
            />
          </div>
          <p className='text-foreground/60 text-xs leading-relaxed sm:text-sm'>
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
