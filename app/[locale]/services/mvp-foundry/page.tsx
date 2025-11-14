import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import {
  BarChart3,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
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
import FOMOCard from '@/features/marketing/components/fomo-card';

export default async function MVPFoundryPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('mvpFoundry');

  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 mx-auto max-w-6xl py-8 sm:py-12 lg:py-16'>
        {/* Hero — Value proposition */}
        <div className='relative mb-8 overflow-hidden rounded-3xl sm:mb-12 lg:mb-16'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div className='flex flex-col items-center text-center md:items-start md:text-left'>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <Sparkles className='h-3 w-3' />
                  {t('badge')}
                </Badge>
                <h1 className='mb-3 text-3xl font-bold text-balance sm:text-4xl md:text-5xl lg:text-6xl'>
                  {t('hero.title')}
                </h1>
                <p className='text-primary mb-2 text-xl font-semibold text-balance sm:text-2xl md:text-3xl'>
                  {t('hero.subtitle')}
                </p>
                <p className='text-foreground/70 text-base leading-relaxed text-pretty sm:text-lg md:text-xl'>
                  {t('hero.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scarcity strip */}
        <FOMOCard variant='mvp-foundry' />

        {/* What's included */}
        <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>
            {t('whatIsIncluded.title')}
          </h2>
          <div className='grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {[
              { icon: Target, key: '0' },
              { icon: Zap, key: '1' },
              { icon: Users, key: '2' },
              { icon: BarChart3, key: '3' },
              { icon: CheckCircle2, key: '4' },
            ].map((item) => (
              <Card key={item.key} className='rounded-3xl p-6 sm:p-8'>
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                    <item.icon className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                  </div>
                  <h3 className='mb-1 text-lg font-semibold sm:mb-2 sm:text-xl'>
                    {t(`whatIsIncluded.items.${item.key}.title` as any)}
                  </h3>
                  <p className='text-foreground/70 text-base leading-relaxed sm:text-lg'>
                    {t(`whatIsIncluded.items.${item.key}.description` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What you get */}
        <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          <Card className='bg-primary/5 border-primary/20 rounded-3xl border-2 p-6 sm:p-8'>
            <CardContent className='p-0'>
              <div className='mb-3 flex flex-col items-center gap-3 text-center sm:mb-4 sm:flex-row sm:text-left'>
                <div className='bg-primary flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                  <Lightbulb className='h-5 w-5 text-white sm:h-6 sm:w-6' />
                </div>
                <h2 className='text-xl font-bold sm:text-2xl'>{t('whatYouGet.title')}</h2>
              </div>
              <p className='mb-3 text-base font-medium sm:mb-4 sm:text-lg'>
                {t('whatYouGet.description')}
              </p>
              <p className='text-foreground/70 text-base leading-relaxed sm:text-lg'>
                {t('whatYouGet.summary')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Guarantees */}
        <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>{t('guarantees.title')}</h2>
          <div className='grid gap-4 sm:gap-6 md:grid-cols-2'>
            {[0, 1, 2, 3, 4].map((idx) => (
              <Card key={idx} className='rounded-3xl p-6 sm:p-8'>
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-2xl sm:mb-4 sm:h-12 sm:w-12'>
                    <ShieldCheck className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                  </div>
                  <h3 className='mb-2 text-lg font-semibold sm:text-xl'>
                    {t(`guarantees.items.${idx}.title` as any)}
                  </h3>
                  <p className='text-foreground/70 text-base leading-relaxed sm:text-lg'>
                    {t(`guarantees.items.${idx}.description` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>{t('faq.title')}</h2>
          <Card className='rounded-3xl p-6 sm:p-8'>
            <CardContent className='p-0'>
              <Accordion type='single' collapsible className='w-full'>
                {[0, 1, 2, 3, 4].map((idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className='text-left text-base sm:text-lg'>
                      {t(`faq.items.${idx}.question` as any)}
                    </AccordionTrigger>
                    <AccordionContent className='text-foreground/70 text-base leading-relaxed sm:text-lg'>
                      {t(`faq.items.${idx}.answer` as any)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Glossary */}
        <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>{t('glossary.title')}</h2>
          <div className='grid gap-4 sm:gap-6 md:grid-cols-2'>
            {[0, 1].map((idx) => (
              <Card key={idx} className='rounded-3xl p-6 sm:p-8'>
                <CardContent className='p-0'>
                  <h3 className='mb-2 text-base font-semibold sm:text-lg'>
                    {t(`glossary.items.${idx}.term` as any)}
                  </h3>
                  <p className='text-foreground/70 text-base leading-relaxed sm:text-lg'>
                    {t(`glossary.items.${idx}.definition` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center sm:gap-4'>
          <div className='flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row'>
            <Button asChild size='lg' className='w-full sm:w-auto'>
              <Link href='/services/audit'>{t('cta.primary')}</Link>
            </Button>
            <CtaTriggerPhoneCallRequest
              variant={'outline'}
              size='lg'
              className='w-full sm:w-auto'
            />
          </div>
          <p className='text-foreground/60 text-sm sm:text-base'>
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
