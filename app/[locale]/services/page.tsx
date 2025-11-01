import type { ElementType } from 'react';

import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Brain, FileSearch, Hammer, type LucideIcon, ShieldCheck, Sparkles } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';
import { Link } from '@/features/i18n/lib/navigation';

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'fr' }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  const services: {
    title: string;
    href: string;
    description: string;
    icon: LucideIcon;
    cta: string;
  }[] = [
    {
      title: t('items.0.title'),
      href: '/services/audit',
      description: t.raw('items.0.description'),
      icon: FileSearch,
      cta: t('items.0.cta'),
    },
    {
      title: t('items.1.title'),
      href: '/services/mvp-foundry',
      description: t.raw('items.1.description'),
      icon: Hammer,
      cta: t('items.1.cta'),
    },
    {
      title: t('items.2.title'),
      href: '/services/ai-sprint',
      description: t.raw('items.2.description'),
      icon: Brain,
      cta: t('items.2.cta'),
    },
    {
      title: t('items.3.title'),
      href: '/services/care-and-hosting-plan',
      description: t.raw('items.3.description'),
      icon: ShieldCheck,
      cta: t('items.3.cta'),
    },
  ];

  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — outcomes, not features */}
        <div className='relative mb-12 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <Sparkles className='h-3 w-3' />
                  {t('badge')}
                </Badge>
                <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                  {t('hero.title')}
                </h1>
                <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                  {t('hero.description')}
                </p>
                <p
                  className='text-foreground/60 mt-3'
                  dangerouslySetInnerHTML={{ __html: t.raw('hero.guarantee') }}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid — concise, outcome-first, links to detail pages */}
        <div className='mb-12 grid gap-6 md:grid-cols-2'>
          {services.map((service) => {
            const Icon = service.icon as ElementType;
            return (
              <Card
                key={service.title}
                className='justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1'
              >
                <CardContent>
                  <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                    <Icon className='text-primary h-6 w-6' />
                  </div>
                  <h2 className='mb-2 text-2xl font-bold'>{service.title}</h2>
                  <p
                    className='text-foreground/70 mb-4 leading-relaxed'
                    dangerouslySetInnerHTML={{ __html: service.description }}
                  />
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={service.href}>{service.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </main>
  );
}
