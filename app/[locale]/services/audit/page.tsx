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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/core/components/ui/accordion';
import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent } from '@/core/components/ui/card';
import CtaTriggerPhoneCallRequest from '@/features/ai/components/cta-trigger-phone-call-request';
import { Link } from '@/features/i18n/lib/navigation';

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
        {/* Hero — Value proposition */}
        <div className='relative mb-6 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <FileSearch className='h-3 w-3' />
                  {t('badge')}
                </Badge>
                <h1 className='mb-3 text-4xl font-bold text-balance md:text-6xl'>
                  {t('hero.title')}
                </h1>
                <p className='text-primary mb-2 text-2xl font-semibold md:text-3xl'>
                  {t('hero.subtitle')}
                </p>
                <p className='text-foreground/70 text-lg md:text-xl'>{t('hero.description')}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What I evaluate */}
        <div className='mb-10'>
          <h2 className='mb-6 text-3xl font-bold'>{t('whatIsIncluded.title')}</h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {[
              { icon: Target, key: '0' },
              { icon: BarChart3, key: '1' },
              { icon: Sparkles, key: '2' },
              { icon: CalendarClock, key: '3' },
              { icon: ShieldCheck, key: '4' },
            ].map((item) => (
              <Card key={item.key} className='rounded-3xl p-6'>
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                    <item.icon className='text-primary h-6 w-6' />
                  </div>
                  <h3 className='mb-1 text-xl font-semibold'>
                    {t(`whatIsIncluded.items.${item.key}.title` as any)}
                  </h3>
                  <p className='text-foreground/70'>
                    {t(`whatIsIncluded.items.${item.key}.description` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What you get */}
        <div className='mb-10'>
          <Card className='bg-primary/5 border-primary/20 rounded-3xl border-2 p-8'>
            <CardContent className='p-0'>
              <div className='mb-4 flex items-center gap-3'>
                <div className='bg-primary flex h-12 w-12 items-center justify-center rounded-2xl'>
                  <Lightbulb className='h-6 w-6 text-white' />
                </div>
                <h2 className='text-2xl font-bold'>{t('whatYouGet.title')}</h2>
              </div>
              <p className='mb-4 text-lg font-medium'>{t('whatYouGet.description')}</p>
              <p className='text-foreground/70 text-lg'>{t('whatYouGet.summary')}</p>
            </CardContent>
          </Card>
        </div>

        {/* Offers — detailed */}
        <div className='mb-10'>
          <h2 className='mb-6 text-3xl font-bold'>{t('offers.title')}</h2>
          <div className='grid gap-6 md:grid-cols-2'>
            {/* MVP Readiness */}
            <Card className='rounded-3xl p-7'>
              <CardContent className='p-0'>
                <div className='bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-2xl'>
                  <ClipboardCheck className='text-primary h-6 w-6' />
                </div>
                <div className='mb-2 flex items-start justify-between'>
                  <h3 className='text-2xl font-bold'>{t('offers.mvpReadiness.title')}</h3>
                  <div className='text-right'>
                    <div className='text-foreground/60 text-sm'>
                      {t('offers.mvpReadiness.duration')}
                    </div>
                  </div>
                </div>
                <p className='text-foreground/70 mb-4'>{t('offers.mvpReadiness.description')}</p>
                <div className='mb-4'>
                  <h4 className='mb-2 font-semibold'>{t('offers.deliverables')}</h4>
                  <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                    <li>{t('offers.mvpReadiness.deliverables.0')}</li>
                    <li>{t('offers.mvpReadiness.deliverables.1')}</li>
                    <li>{t('offers.mvpReadiness.deliverables.2')}</li>
                  </ul>
                </div>
                <p className='text-primary mb-4 font-medium'>{t('offers.mvpReadiness.summary')}</p>
                <div className='flex gap-2'>
                  <Button asChild>
                    <Link href='/services/mvp-foundry'>{t('offers.mvpReadiness.cta.primary')}</Link>
                  </Button>
                  <CtaTriggerPhoneCallRequest variant='outline' />
                </div>
              </CardContent>
            </Card>

            {/* AI Readiness */}
            <Card className='rounded-3xl p-7'>
              <CardContent className='p-0'>
                <div className='bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-2xl'>
                  <Sparkles className='text-primary h-6 w-6' />
                </div>
                <div className='mb-2 flex items-start justify-between'>
                  <h3 className='text-2xl font-bold'>{t('offers.aiReadiness.title')}</h3>
                  <div className='text-right'>
                    <div className='text-foreground/60 text-sm'>
                      {t('offers.aiReadiness.duration')}
                    </div>
                  </div>
                </div>
                <p className='text-foreground/70 mb-4'>{t('offers.aiReadiness.description')}</p>
                <div className='mb-4'>
                  <h4 className='mb-2 font-semibold'>{t('offers.deliverables')}</h4>
                  <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                    <li>{t('offers.aiReadiness.deliverables.0')}</li>
                    <li>{t('offers.aiReadiness.deliverables.1')}</li>
                    <li>{t('offers.aiReadiness.deliverables.2')}</li>
                  </ul>
                </div>
                <p className='text-primary mb-4 font-medium'>{t('offers.aiReadiness.summary')}</p>
                <div className='flex gap-2'>
                  <Button asChild>
                    <Link href='/services/ai-sprint'>{t('offers.aiReadiness.cta.primary')}</Link>
                  </Button>
                  <Button asChild variant='outline'>
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
        <div className='mb-10'>
          <h2 className='mb-6 text-3xl font-bold'>{t('guarantees.title')}</h2>
          <div className='grid gap-6 md:grid-cols-2'>
            {[0, 1, 2, 3, 4].map((idx) => (
              <Card key={idx} className='rounded-3xl p-6'>
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                    <Shield className='text-primary h-6 w-6' />
                  </div>
                  <h3 className='mb-2 text-xl font-semibold'>
                    {t(`guarantees.items.${idx}.title` as any)}
                  </h3>
                  <p className='text-foreground/70'>
                    {t(`guarantees.items.${idx}.description` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className='mb-10'>
          <h2 className='mb-6 text-3xl font-bold'>{t('faq.title')}</h2>
          <Card className='rounded-3xl p-6'>
            <CardContent className='p-0'>
              <Accordion type='single' collapsible className='w-full'>
                {[0, 1, 2, 3, 4].map((idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className='text-left'>
                      {t(`faq.items.${idx}.question` as any)}
                    </AccordionTrigger>
                    <AccordionContent className='text-foreground/70'>
                      {t(`faq.items.${idx}.answer` as any)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Glossary */}
        <div className='mb-10'>
          <h2 className='mb-6 text-3xl font-bold'>{t('glossary.title')}</h2>
          <div className='grid gap-4 md:grid-cols-2'>
            {[0, 1].map((idx) => (
              <Card key={idx} className='rounded-3xl p-6'>
                <CardContent className='p-0'>
                  <h3 className='mb-2 text-lg font-semibold'>
                    {t(`glossary.items.${idx}.term` as any)}
                  </h3>
                  <p className='text-foreground/70'>
                    {t(`glossary.items.${idx}.definition` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <Button asChild size='lg'>
              <Link href='/services/mvp-foundry'>{t('cta.primary')}</Link>
            </Button>
            <CtaTriggerPhoneCallRequest variant={'outline'} size='lg' />
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
