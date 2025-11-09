import { getTranslations, setRequestLocale } from 'next-intl/server';

import { BarChart3, CheckCircle2, Hammer, Rocket, ShieldCheck, Sparkles } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent } from '@/core/components/ui/card';
import CtaTriggerPhoneCallRequest from '@/features/ai/components/cta-trigger-phone-call-request';
import { Link } from '@/features/i18n/lib/navigation';
import FOMOCard from '@/features/marketing/fomo-card';
import GuaranteeHeadline from '@/features/marketing/guarantee-headline';

export default async function MVPFoundryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale as 'en' | 'fr');
  const t = await getTranslations('mvpFoundry');
  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — Outcomes, not tech */}
        <div className='relative mb-6 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <Sparkles className='h-3 w-3' />
                  {t('badge')}
                </Badge>
                <h1 className='mb-3 text-4xl font-bold text-balance md:text-6xl'>
                  {t('hero.title')}
                </h1>
                <p className='text-foreground/70 text-lg md:text-xl'>{t('hero.description')}</p>
                <GuaranteeHeadline />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scarcity strip — Cohort cap / FOMO */}
        <FOMOCard variant='mvp-foundry' />

        {/* Outcomes (short & punchy) */}
        <div className='mb-10 grid gap-6 md:grid-cols-3'>
          {[
            { icon: Rocket, key: '0' },
            { icon: BarChart3, key: '1' },
            { icon: ShieldCheck, key: '2' },
          ].map((item) => (
            <Card key={item.key} className='rounded-3xl p-6'>
              <CardContent className='p-0'>
                <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                  <item.icon className='text-primary h-6 w-6' />
                </div>
                <h3 className='mb-1 text-xl font-semibold'>
                  {t(`outcomes.${item.key}.title` as any)}
                </h3>
                <p className='text-foreground/70'>{t(`outcomes.${item.key}.description` as any)}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* The MVP Plan — one card, no price */}
        <div className='mb-12'>
          <Card className='rounded-3xl p-6 md:p-8'>
            <CardContent className='p-0'>
              <div className='mb-4 flex items-center justify-between'>
                <h3 className='text-2xl font-semibold'>{t('plan.title')}</h3>
                <Badge variant='secondary'>{t('plan.duration')}</Badge>
              </div>
              <p className='text-foreground/70 mb-6'>{t('plan.description')}</p>

              <div className='grid gap-6 md:grid-cols-3'>
                {[0, 1, 2].map((idx) => (
                  <div key={idx}>
                    <h4 className='mb-2 font-semibold'>{t(`plan.sections.${idx}.title` as any)}</h4>
                    <ul className='text-foreground/80 list-inside list-disc space-y-2'>
                      {[0, 1, 2].map((itemIdx) => (
                        <li key={itemIdx}>{t(`plan.sections.${idx}.items.${itemIdx}` as any)}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* How we work — short & clear */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          {[
            { icon: Hammer, key: '0' },
            { icon: BarChart3, key: '1' },
            { icon: CheckCircle2, key: '2' },
          ].map((item) => (
            <Card key={item.key} className='rounded-3xl p-6'>
              <CardContent className='p-0'>
                <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                  <item.icon className='text-primary h-6 w-6' />
                </div>
                <h3 className='mb-1 text-xl font-semibold'>
                  {t(`howWeWork.${item.key}.title` as any)}
                </h3>
                <p className='text-foreground/70'>
                  {t(`howWeWork.${item.key}.description` as any)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <Button asChild>
              <Link href='/services/audit'>{t('cta.primary')}</Link>
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
