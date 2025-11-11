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
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — Value proposition */}
        <div className='relative mb-6 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <div className='mb-4 flex items-center gap-2'>
                  <Badge className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                    <ShieldCheck className='h-3 w-3' />
                    {t('badge')}
                  </Badge>
                  <Badge variant='secondary' className='rounded-full px-3 py-1 text-xs'>
                    {t('availabilityBadge')}
                  </Badge>
                </div>
                <h1 className='mb-3 text-4xl font-bold text-balance md:text-6xl'>
                  {t('hero.title')}
                </h1>
                <p className='text-foreground/70 text-lg md:text-xl'>
                  {t.rich('hero.description', {
                    strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p className='text-foreground/60 mt-2 text-base'>{t('hero.subtitle')}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What's included */}
        <div className='mb-10'>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
            {[
              { icon: Server, key: '0' },
              { icon: ShieldCheck, key: '1' },
              { icon: Settings, key: '2' },
              { icon: BarChart3, key: '3' },
            ].map((item) => (
              <Card key={item.key} className='rounded-3xl p-6'>
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                    <item.icon className='text-primary h-6 w-6' />
                  </div>
                  <h3 className='mb-1 text-xl font-semibold'>
                    {t(`benefits.${item.key}.title` as any)}
                  </h3>
                  <p className='text-foreground/70'>
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
            <h2 className='mb-2 text-3xl font-bold'>{t('plans.title')}</h2>
            <p className='text-foreground/70 text-base'>{t('plans.subtitle')}</p>
          </div>

          <div className='grid gap-6 md:grid-cols-3'>
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
        <div className='mb-10'>
          <h2 className='mb-6 text-3xl font-bold'>{t('guarantees.title')}</h2>
          <div className='grid gap-6 md:grid-cols-2'>
            {[0, 1, 2, 3, 4].map((idx) => (
              <Card key={idx} className='rounded-3xl p-6'>
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                    <ShieldCheck className='text-primary h-6 w-6' />
                  </div>
                  <h3 className='mb-2 text-xl font-semibold'>
                    {t(`guarantees.items.${idx}.title` as any)}
                  </h3>
                  <p className='text-foreground/70 mb-2'>
                    {t(`guarantees.items.${idx}.promise` as any)}
                  </p>
                  <p className='text-foreground/60 text-sm italic'>
                    {t(`guarantees.items.${idx}.ifMissed` as any)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <CtaTriggerPhoneCallRequest size='lg' />
            <Button asChild variant='outline' size='lg'>
              <Link href='/contact'>{t('cta.secondary')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
