import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { CheckCircle2, Code2, Gauge, ShieldCheck, Sparkles, Users } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Card, CardContent } from '@/core/components/ui/card';
import CtaTriggerPhoneCallRequest from '@/features/ai/components/cta-trigger-phone-call-request';

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('about');

  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 mx-auto max-w-6xl py-8 sm:py-12 lg:py-16'>
        {/* Hero — who you'll work with */}
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
                <p className='text-foreground/70 text-base leading-relaxed text-pretty sm:text-lg md:text-xl'>
                  {t.rich('hero.description', {
                    strong: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick proof strip */}
        <div className='mb-8 grid grid-cols-2 gap-3 sm:mb-10 md:mb-12 md:grid-cols-4 lg:mb-16'>
          {[
            {
              icon: Gauge,
              label: t('proofStrip.mvp'),
            },
            {
              icon: Code2,
              label: t('proofStrip.stack'),
            },
            {
              icon: ShieldCheck,
              label: t('proofStrip.mindset'),
            },
            {
              icon: Users,
              label: t('proofStrip.team'),
            },
          ].map((item, i) => (
            <div
              key={i}
              className='flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium'
            >
              <item.icon className='h-4 w-4' />
              <span className='text-foreground/80'>{item.label}</span>
            </div>
          ))}
        </div>

        {/* What I do for clients */}
        <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>{t('whatIDo.title')}</h2>
          <Card className='rounded-3xl p-6 sm:p-8'>
            <CardContent className='text-foreground/80 p-0'>
              <ul className='grid gap-4 md:grid-cols-2'>
                <li className='flex gap-2'>
                  <CheckCircle2 className='text-primary mt-1 h-5 w-5 shrink-0' />
                  <span>
                    {t.rich('whatIDo.items.mvpSpeed', {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </span>
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='text-primary mt-1 h-5 w-5 shrink-0' />
                  <span>
                    {t.rich('whatIDo.items.aiFeature', {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </span>
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='text-primary mt-1 h-5 w-5 shrink-0' />
                  <span>
                    {t.rich('whatIDo.items.roadmap', {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </span>
                </li>
                <li className='flex gap-2'>
                  <CheckCircle2 className='text-primary mt-1 h-5 w-5 shrink-0' />
                  <span>
                    {t.rich('whatIDo.items.maintenance', {
                      strong: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* How I work */}
        <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>{t('howIWork.title')}</h2>
          <div className='grid gap-4 sm:gap-6 md:grid-cols-3'>
            <Card className='rounded-3xl p-6 sm:p-8'>
              <CardContent className='p-0'>
                <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                  <Gauge className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                </div>
                <h3 className='mb-1 text-lg font-semibold sm:mb-2 sm:text-xl'>
                  {t('howIWork.sprints.title')}
                </h3>
                <p className='text-foreground/70 text-base leading-relaxed sm:text-lg'>
                  {t('howIWork.sprints.description')}
                </p>
              </CardContent>
            </Card>

            <Card className='rounded-3xl p-6 sm:p-8'>
              <CardContent className='p-0'>
                <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                  <ShieldCheck className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                </div>
                <h3 className='mb-1 text-lg font-semibold sm:mb-2 sm:text-xl'>
                  {t('howIWork.production.title')}
                </h3>
                <p className='text-foreground/70 text-base leading-relaxed sm:text-lg'>
                  {t('howIWork.production.description')}
                </p>
              </CardContent>
            </Card>

            <Card className='rounded-3xl p-6 sm:p-8'>
              <CardContent className='p-0'>
                <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                  <Code2 className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                </div>
                <h3 className='mb-1 text-lg font-semibold sm:mb-2 sm:text-xl'>
                  {t('howIWork.stack.title')}
                </h3>
                <p className='text-foreground/70 text-base leading-relaxed sm:text-lg'>
                  {t('howIWork.stack.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience snapshot */}
        <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>{t('experience.title')}</h2>
          <Card className='rounded-3xl p-6 sm:p-8'>
            <CardContent className='text-foreground/80 p-0'>
              <div className='grid gap-4 md:grid-cols-3'>
                <div className='rounded-xl p-2'>
                  <div className='text-primary mb-1 text-sm font-semibold'>
                    {t('experience.products.label')}
                  </div>
                  <p className='text-sm'>{t('experience.products.description')}</p>
                </div>
                <div className='rounded-xl p-2'>
                  <div className='text-primary mb-1 text-sm font-semibold'>
                    {t('experience.built.label')}
                  </div>
                  <p className='text-sm'>{t('experience.built.description')}</p>
                </div>
                <div className='rounded-xl p-2'>
                  <div className='text-primary mb-1 text-sm font-semibold'>
                    {t('experience.showUp.label')}
                  </div>
                  <p className='text-sm'>{t('experience.showUp.description')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* A bit about me */}
        <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16'>
          <h2 className='mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl'>{t('human.title')}</h2>
          <Card className='rounded-3xl p-6 sm:p-8'>
            <CardContent className='text-foreground/80 space-y-4 p-0'>
              <p>{t('human.paragraph1')}</p>
              <p className='text-foreground/70 text-sm'>{t('human.paragraph2')}</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center sm:gap-4'>
          <h2 className='text-2xl font-bold sm:text-3xl'>{t('cta.title')}</h2>
          <p className='text-foreground/70 mx-auto mb-4 max-w-2xl text-sm md:text-base'>
            {t('cta.description')}
          </p>
          <CtaTriggerPhoneCallRequest className='w-full' />
        </div>
      </div>
    </main>
  );
}
