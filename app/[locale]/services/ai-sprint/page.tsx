import type { Route } from 'next';
import { getTranslations } from 'next-intl/server';

import { CheckCircle2, Gauge, Rocket, Sparkles, Target, Timer } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';
import CtaTriggerPhoneCallRequest from '@/features/ai/components/cta-trigger-phone-call-request';
import { Link } from '@/features/i18n/lib/navigation';
import FOMOCard from '@/features/marketing/components/fomo-card';
import GuaranteeHeadline from '@/features/marketing/components/guarantee-headline';

export default async function AISprintPage() {
  const t = await getTranslations('aiSprint');
  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — Outcomes, not features */}
        <div className='relative mb-6 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <Sparkles className='h-3 w-3' />
                  {t('badge')}
                </Badge>

                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  {t.rich('hero.title', {
                    mark: (chunks: React.ReactNode) => (
                      <span className='decoration-primary/50 underline underline-offset-4'>
                        {chunks}
                      </span>
                    ),
                  })}
                </h1>

                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  {t.rich('hero.description', {
                    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                  })}
                </p>

                <GuaranteeHeadline />
              </div>
            </CardContent>
          </Card>
        </div>

        <FOMOCard variant='ai-sprint' />

        {/* Outcomes we target */}
        <section className='mb-10 grid gap-6 md:grid-cols-3'>
          {[
            {
              icon: Target,
              title: t('outcomes.0.title'),
              desc: t('outcomes.0.description'),
            },
            {
              icon: Gauge,
              title: t('outcomes.1.title'),
              desc: t('outcomes.1.description'),
            },
            {
              icon: CheckCircle2,
              title: t('outcomes.2.title'),
              desc: t('outcomes.2.description'),
            },
          ].map((b) => {
            const Icon = b.icon;
            return (
              <Card key={b.title} className='rounded-3xl p-6'>
                <CardContent className='p-0'>
                  <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                    <Icon className='text-primary h-6 w-6' />
                  </div>
                  <h3 className='mb-1 text-xl font-semibold'>{b.title}</h3>
                  <p className='text-foreground/70'>{b.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </section>

        {/* What you get (deliverables) */}
        <section className='mb-10 grid gap-6 md:grid-cols-2'>
          <Card className='rounded-3xl p-8'>
            <CardContent className='p-0'>
              <h2 className='mb-3 text-2xl font-bold'>{t('deliverables.title')}</h2>
              <ul className='text-foreground/80 space-y-2'>
                <li>{t('deliverables.items.0')}</li>
                <li>{t('deliverables.items.1')}</li>
                <li>{t('deliverables.items.2')}</li>
                <li>{t('deliverables.items.3')}</li>
                <li>
                  {t.rich('deliverables.items.4', {
                    b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                  })}
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className='rounded-3xl p-8'>
            <CardContent className='p-0'>
              <h2 className='mb-3 text-2xl font-bold'>{t('notIncluded.title')}</h2>
              <ul className='text-foreground/80 space-y-2'>
                <li>{t('notIncluded.items.0')}</li>
                <li>{t('notIncluded.items.1')}</li>
                <li>{t('notIncluded.items.2')}</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Process */}
        <section className='mb-10'>
          <Card className='rounded-3xl p-8'>
            <CardContent className='p-0'>
              <div className='mb-6 flex items-center gap-3'>
                <Timer className='text-primary h-5 w-5' />
                <h2 className='text-2xl font-bold'>{t('process.title')}</h2>
              </div>
              <div className='grid gap-6 md:grid-cols-3'>
                <div>
                  <h3 className='mb-1 font-semibold'>{t('process.phases.0.title')}</h3>
                  <p className='text-foreground/70'>{t('process.phases.0.description')}</p>
                </div>
                <div>
                  <h3 className='mb-1 font-semibold'>{t('process.phases.1.title')}</h3>
                  <p className='text-foreground/70'>{t('process.phases.1.description')}</p>
                </div>
                <div>
                  <h3 className='mb-1 font-semibold'>{t('process.phases.2.title')}</h3>
                  <p className='text-foreground/70'>{t('process.phases.2.description')}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className='mt-6'>
              <Button asChild>
                <Link href={'/contact' as Route}>
                  <Rocket className='mr-2 h-4 w-4' />
                  {t('process.cta')}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* Success metrics (client-language) */}
        <section className='mb-10'>
          <Card className='rounded-3xl p-8'>
            <CardContent className='p-0'>
              <h2 className='mb-4 text-2xl font-bold'>{t('metrics.title')}</h2>
              <div className='grid gap-4 md:grid-cols-2'>
                <ul className='text-foreground/80 space-y-2'>
                  <li>
                    {t.rich('metrics.items.0', {
                      b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                    })}
                  </li>
                  <li>
                    {t.rich('metrics.items.1', {
                      b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                    })}
                  </li>
                  <li>
                    {t.rich('metrics.items.2', {
                      b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                    })}
                  </li>
                </ul>
                <ul className='text-foreground/80 space-y-2'>
                  <li>
                    {t.rich('metrics.items.3', {
                      b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                    })}
                  </li>
                  <li>
                    {t.rich('metrics.items.4', {
                      b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                    })}
                  </li>
                  <li>
                    {t.rich('metrics.items.5', {
                      b: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
                    })}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <Button asChild>
              <Link href='/services/audit'>{t('cta.primary')}</Link>
            </Button>
            <CtaTriggerPhoneCallRequest variant={'outline'} />
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
