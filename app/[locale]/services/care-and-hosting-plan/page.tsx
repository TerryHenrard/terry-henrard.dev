import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { BarChart3, Server, Settings, ShieldCheck } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent } from '@/core/components/ui/card';
import CtaTriggerPhoneCallRequest from '@/features/ai/components/cta-trigger-phone-call-request';
import { Link } from '@/features/i18n/lib/navigation';
import { PlanCard } from '@/features/marketing/components/plan-card';

export default async function CareAndHostingPlanPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('careAndHosting');
  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 mx-auto max-w-6xl py-8 sm:py-12 lg:py-16'>
        {/* Hero — Value proposition */}
        <div className='relative mb-8 overflow-hidden rounded-3xl sm:mb-12 lg:mb-16'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div className='flex flex-col items-center text-center md:items-start md:text-left'>
                <div className='mb-4 flex flex-wrap items-center justify-center gap-2 md:justify-start'>
                  <Badge className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                    <ShieldCheck className='h-3 w-3' />
                    {t('badge')}
                  </Badge>
                  <Badge variant='secondary' className='rounded-full px-3 py-1 text-xs'>
                    {t('availabilityBadge')}
                  </Badge>
                </div>
                <h1 className='mb-4 text-3xl font-bold text-balance sm:text-4xl md:text-5xl lg:text-6xl'>
                  {t('hero.title')}
                </h1>
                <p className='text-foreground/70 text-base leading-relaxed text-pretty sm:text-lg md:text-xl'>
                  {t.rich('hero.description', {
                    strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p className='text-foreground/60 mt-3 text-sm sm:text-base'>{t('hero.subtitle')}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What's included */}
        <div className='mb-10 sm:mb-12'>
          <div className='grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {[
              { icon: Server, key: '0' },
              { icon: ShieldCheck, key: '1' },
              { icon: Settings, key: '2' },
              { icon: BarChart3, key: '3' },
            ].map((item) => (
              <Card key={item.key} className='rounded-3xl p-6 sm:p-8'>
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                    <item.icon className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                  </div>
                  <h3 className='mb-2 text-lg font-semibold sm:text-xl'>
                    {t(`benefits.${item.key}.title` as any)}
                  </h3>
                  <p className='text-foreground/70 text-sm leading-relaxed sm:text-base'>
                    {t(`benefits.${item.key}.description` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Plans — Three tiers with clear outcomes */}
        <div className='mb-12'>
          <div className='mb-8 text-center'>
            <h2 className='mb-2 text-2xl font-bold sm:text-3xl'>{t('plans.title')}</h2>
            <p className='text-foreground/70 text-sm sm:text-base'>{t('plans.subtitle')}</p>
          </div>

          <div className='grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <PlanCard
              title={t('plans.lightsOn.title')}
              goal={t('plans.lightsOn.goal')}
              includedLabel={t('plans.lightsOn.included')}
              items={[0, 1, 2, 3].map((i) => t(`plans.lightsOn.items.${i}` as any))}
              outcomeLabel={t('plans.lightsOn.outcome.label')}
              outcomeText={t('plans.lightsOn.outcome.text')}
              ctaText={t('plans.lightsOn.cta')}
              ctaPrompt={t('plans.lightsOn.ctaPrompt')}
            />

            <PlanCard
              title={t('plans.steadyGrowth.title')}
              goal={t('plans.steadyGrowth.goal')}
              includedLabel={t('plans.steadyGrowth.included')}
              items={[0, 1, 2, 3].map((i) => t(`plans.steadyGrowth.items.${i}` as any))}
              outcomeLabel={t('plans.steadyGrowth.outcome.label')}
              outcomeText={t('plans.steadyGrowth.outcome.text')}
              ctaText={t('plans.steadyGrowth.cta')}
              ctaPrompt={t('plans.steadyGrowth.ctaPrompt')}
              highlighted
            />

            <PlanCard
              title={t('plans.velocity.title')}
              goal={t('plans.velocity.goal')}
              includedLabel={t('plans.velocity.included')}
              items={[0, 1, 2, 3].map((i) => t(`plans.velocity.items.${i}` as any))}
              outcomeLabel={t('plans.velocity.outcome.label')}
              outcomeText={t('plans.velocity.outcome.text')}
              ctaText={t('plans.velocity.cta')}
              ctaPrompt={t('plans.velocity.ctaPrompt')}
            />
          </div>
        </div>

        {/* Guarantees */}
        <div className='mb-10 sm:mb-12'>
          <h2 className='mb-6 text-2xl font-bold sm:text-3xl'>{t('guarantees.title')}</h2>
          <div className='grid gap-4 sm:gap-6 md:grid-cols-2'>
            {[0, 1, 2, 3, 4].map((idx) => (
              <Card key={idx} className='rounded-3xl p-6 sm:p-8'>
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                    <ShieldCheck className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                  </div>
                  <h3 className='mb-2 text-lg font-semibold sm:text-xl'>
                    {t(`guarantees.items.${idx}.title` as any)}
                  </h3>
                  <p className='text-foreground/70 mb-2 text-sm leading-relaxed sm:text-base'>
                    {t(`guarantees.items.${idx}.promise` as any)}
                  </p>
                  <p className='text-foreground/60 text-xs italic sm:text-sm'>
                    {t(`guarantees.items.${idx}.ifMissed` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row'>
            <CtaTriggerPhoneCallRequest size='lg' className='w-full sm:w-auto' />
            <Button asChild variant='outline' size='lg' className='w-full sm:w-auto'>
              <Link href='/contact'>{t('cta.secondary')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
