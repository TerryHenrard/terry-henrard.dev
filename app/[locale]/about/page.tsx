import { getTranslations, setRequestLocale } from 'next-intl/server';

import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Gauge,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
} from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/core/components/ui/card';
import CtaTriggerPhoneCallRequest from '@/features/ai/components/cta-trigger-phone-call-request';

export default async function AboutPage({ params }: { params: Promise<{ locale: 'en' | 'fr' }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — About & Eligibility */}
        <div className='relative mb-12 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div className=''>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <Sparkles className='h-3 w-3' />
                  {t('badge')}
                </Badge>
                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  {t('hero.title')}
                </h1>
                <p
                  className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'
                  dangerouslySetInnerHTML={{ __html: t.raw('hero.description') }}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credibility / Proof Strip — personal, not salesy */}
        <div className='mb-12 grid grid-cols-2 gap-3 md:grid-cols-4'>
          {[
            { icon: Gauge, label: t('credibility.items.0.label') },
            { icon: ShieldCheck, label: t('credibility.items.1.label') },
            { icon: Code2, label: t('credibility.items.2.label') },
            { icon: Users, label: t('credibility.items.3.label') },
          ].map((item, i) => (
            <div
              key={i}
              className='flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium'
            >
              <item.icon className='h-4 w-4' />
              {item.label}
            </div>
          ))}
        </div>

        {/* Why I'm a Strong Fit */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>{t('strongFit.title')}</CardTitle>
          </CardHeader>
          <CardContent className='text-foreground/70 leading-relaxed'>
            <ul className='grid gap-4 md:grid-cols-2'>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <li key={i} className='flex gap-2'>
                  <CheckCircle2 className='text-primary mt-1 h-5 w-5 shrink-0' />
                  <span>{t(`strongFit.points.${i}` as any)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Principles I work by */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>{t('principles.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 md:grid-cols-3'>
              {[
                {
                  key: '0',
                  icon: BookOpen,
                },
                {
                  key: '1',
                  icon: Gauge,
                },
                {
                  key: '2',
                  icon: ShieldCheck,
                },
              ].map((p) => (
                <Card key={p.key} className='p-4'>
                  <CardHeader className='pb-2'>
                    <div className='bg-primary/10 mb-2 flex h-10 w-10 items-center justify-center rounded-xl'>
                      <p.icon className='text-primary h-5 w-5' />
                    </div>
                    <CardTitle className='text-lg'>
                      {t(`principles.items.${p.key}.title` as any)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='text-foreground/70 pt-0'>
                    {t(`principles.items.${p.key}.description` as any)}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Experience Snapshot (real, concise) */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>{t('experience.title')}</CardTitle>
          </CardHeader>
          <CardContent className='text-foreground/70'>
            <div className='grid gap-4 md:grid-cols-3'>
              <div className='rounded-xl p-4'>
                <div className='mb-2 flex items-center gap-3'>
                  <TerminalSquare className='text-primary h-5 w-5' />
                  <div className='text-foreground font-medium'>{t('experience.items.0.title')}</div>
                </div>
                <p>{t('experience.items.0.description')}</p>
              </div>
              <div className='rounded-xl p-4'>
                <div className='mb-2 flex items-center gap-3'>
                  <Code2 className='text-primary h-5 w-5' />
                  <div className='text-foreground font-medium'>{t('experience.items.1.title')}</div>
                </div>
                <p>{t('experience.items.1.description')}</p>
              </div>
              <div className='rounded-xl p-4'>
                <div className='mb-2 flex items-center gap-3'>
                  <Award className='text-primary h-5 w-5' />
                  <div className='text-foreground font-medium'>{t('experience.items.2.title')}</div>
                </div>
                <p>{t('experience.items.2.description')}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tools I use daily */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>{t('tools.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {[
                {
                  category: t('tools.categories.0.category'),
                  skills: [
                    t('tools.categories.0.skills.0'),
                    t('tools.categories.0.skills.1'),
                    t('tools.categories.0.skills.2'),
                    t('tools.categories.0.skills.3'),
                  ],
                },
                {
                  category: t('tools.categories.1.category'),
                  skills: [
                    t('tools.categories.1.skills.0'),
                    t('tools.categories.1.skills.1'),
                    t('tools.categories.1.skills.2'),
                  ],
                },
                {
                  category: t('tools.categories.2.category'),
                  skills: [
                    t('tools.categories.2.skills.0'),
                    t('tools.categories.2.skills.1'),
                    t('tools.categories.2.skills.2'),
                  ],
                },
                {
                  category: t('tools.categories.3.category'),
                  skills: [
                    t('tools.categories.3.skills.0'),
                    t('tools.categories.3.skills.1'),
                    t('tools.categories.3.skills.2'),
                  ],
                },
                {
                  category: t('tools.categories.4.category'),
                  skills: [
                    t('tools.categories.4.skills.0'),
                    t('tools.categories.4.skills.1'),
                    t('tools.categories.4.skills.2'),
                  ],
                },
                {
                  category: t('tools.categories.5.category'),
                  skills: [t('tools.categories.5.skills.0'), t('tools.categories.5.skills.1')],
                },
              ].map((item, index) => (
                <Card key={index} className='p-4'>
                  <CardHeader className='pb-2'>
                    <CardTitle className='text-lg'>{item.category}</CardTitle>
                  </CardHeader>
                  <CardContent className='pt-0'>
                    <div className='flex flex-wrap gap-1'>
                      {item.skills.map((skill, i) => (
                        <Badge key={i} variant='secondary' className='text-xs'>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Story (short & relevant) */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>{t('story.title')}</CardTitle>
          </CardHeader>
          <CardContent className='text-foreground/70 leading-relaxed'>
            <div className='space-y-6'>
              <div className='flex gap-6'>
                <div className='bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl'>
                  <GraduationCap className='text-primary h-6 w-6' />
                </div>
                <div>
                  <div className='text-primary mb-1 text-sm font-semibold'>
                    {t('story.timeline.0.period')}
                  </div>
                  <p>{t('story.timeline.0.description')}</p>
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl'>
                  <Briefcase className='text-primary h-6 w-6' />
                </div>
                <div>
                  <div className='text-primary mb-1 text-sm font-semibold'>
                    {t('story.timeline.1.period')}
                  </div>
                  <p>{t('story.timeline.1.description')}</p>
                </div>
              </div>

              <div className='flex gap-6'>
                <div className='bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl'>
                  <Award className='text-primary h-6 w-6' />
                </div>
                <div>
                  <div className='text-primary mb-1 text-sm font-semibold'>
                    {t('story.timeline.2.period')}
                  </div>
                  <p>{t('story.timeline.2.description')}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eligibility Checklist (for hiring managers) */}
        <Card className='mb-12 p-8'>
          <CardHeader>
            <CardTitle className='text-3xl'>{t('eligibility.title')}</CardTitle>
          </CardHeader>
          <CardContent className='text-foreground/70'>
            <ul className='space-y-2'>
              {[0, 1, 2, 3, 4].map((i) => (
                <li key={i} className='flex gap-2'>
                  <CheckCircle2 className='text-primary mt-1 h-4 w-4' />
                  <span>{t(`eligibility.items.${i}` as any)}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Light CTA — still about fit, not selling */}
        <Card className='p-8 text-center'>
          <CardHeader>
            <CardTitle className='text-3xl'>{t('cta.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-foreground/70 mx-auto mb-6 max-w-2xl'>{t('cta.description')}</p>
            <CtaTriggerPhoneCallRequest />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
