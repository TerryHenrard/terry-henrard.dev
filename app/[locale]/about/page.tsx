import { getTranslations } from 'next-intl/server';

import { CheckCircle2, Code2, Gauge, ShieldCheck, Sparkles, Users } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/core/components/ui/card';
import CtaTriggerPhoneCallRequest from '@/features/ai/components/cta-trigger-phone-call-request';

export default async function AboutPage() {
  const t = await getTranslations('about');
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl space-y-10 px-4 py-8 md:space-y-12'>
        {/* Hero — who you'll work with */}
        <div className='relative mb-2 overflow-hidden rounded-3xl'>
          <Card className='border-0 bg-transparent'>
            <CardContent className='p-0'>
              <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                <Sparkles className='h-3 w-3' />
                {t('badge')}
              </Badge>
              <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                {t('hero.title')}
              </h1>
              <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                {t.rich('hero.description', {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick proof strip */}
        <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>
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
        <Card className='p-6 md:p-8'>
          <CardHeader className='pb-4'>
            <CardTitle className='text-2xl md:text-3xl'>{t('whatIDo.title')}</CardTitle>
          </CardHeader>
          <CardContent className='text-foreground/80'>
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

        {/* How I work */}
        <Card className='p-6 md:p-8'>
          <CardHeader className='pb-4'>
            <CardTitle className='text-2xl md:text-3xl'>{t('howIWork.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-3'>
              <Card className='p-4'>
                <CardHeader className='pb-2'>
                  <div className='bg-primary/10 mb-2 flex h-10 w-10 items-center justify-center rounded-xl'>
                    <Gauge className='text-primary h-5 w-5' />
                  </div>
                  <CardTitle className='text-lg'>{t('howIWork.sprints.title')}</CardTitle>
                </CardHeader>
                <CardContent className='text-foreground/70 pt-0'>
                  {t('howIWork.sprints.description')}
                </CardContent>
              </Card>

              <Card className='p-4'>
                <CardHeader className='pb-2'>
                  <div className='bg-primary/10 mb-2 flex h-10 w-10 items-center justify-center rounded-xl'>
                    <ShieldCheck className='text-primary h-5 w-5' />
                  </div>
                  <CardTitle className='text-lg'>{t('howIWork.production.title')}</CardTitle>
                </CardHeader>
                <CardContent className='text-foreground/70 pt-0'>
                  {t('howIWork.production.description')}
                </CardContent>
              </Card>

              <Card className='p-4'>
                <CardHeader className='pb-2'>
                  <div className='bg-primary/10 mb-2 flex h-10 w-10 items-center justify-center rounded-xl'>
                    <Code2 className='text-primary h-5 w-5' />
                  </div>
                  <CardTitle className='text-lg'>{t('howIWork.stack.title')}</CardTitle>
                </CardHeader>
                <CardContent className='text-foreground/70 pt-0'>
                  {t('howIWork.stack.description')}
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Experience snapshot */}
        <Card className='p-6 md:p-8'>
          <CardHeader className='pb-4'>
            <CardTitle className='text-2xl md:text-3xl'>{t('experience.title')}</CardTitle>
          </CardHeader>
          <CardContent className='text-foreground/80'>
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

        {/* A bit about me */}
        <Card className='p-6 md:p-8'>
          <CardHeader className='pb-4'>
            <CardTitle className='text-2xl md:text-3xl'>{t('human.title')}</CardTitle>
          </CardHeader>
          <CardContent className='text-foreground/80 space-y-4'>
            <p>{t('human.paragraph1')}</p>
            <p className='text-foreground/70 text-sm'>{t('human.paragraph2')}</p>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className='p-6 text-center md:p-8'>
          <CardHeader>
            <CardTitle className='text-2xl md:text-3xl'>{t('cta.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-foreground/70 mx-auto mb-6 max-w-2xl text-sm md:text-base'>
              {t('cta.description')}
            </p>
            <CtaTriggerPhoneCallRequest />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
