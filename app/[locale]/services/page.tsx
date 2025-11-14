import type { ElementType } from 'react';

import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Brain, FileSearch, Hammer, type LucideIcon, ShieldCheck, Sparkles } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';
import { Link } from '@/features/i18n/lib/navigation';

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  const services: {
    title: string;
    href: string;
    description: React.ReactNode;
    icon: LucideIcon;
    cta: string;
  }[] = [
    {
      title: t('items.0.title'),
      href: '/services/audit',
      description: t.rich('items.0.description', {
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      icon: FileSearch,
      cta: t('items.0.cta'),
    },
    {
      title: t('items.1.title'),
      href: '/services/mvp-foundry',
      description: t.rich('items.1.description', {
        b: (chunks) => <strong>{chunks}</strong>,
      }),
      icon: Hammer,
      cta: t('items.1.cta'),
    },
    {
      title: t('items.2.title'),
      href: '/services/ai-sprint',
      description: t('items.2.description'),
      icon: Brain,
      cta: t('items.2.cta'),
    },
    {
      title: t('items.3.title'),
      href: '/services/care-and-hosting-plan',
      description: t('items.3.description'),
      icon: ShieldCheck,
      cta: t('items.3.cta'),
    },
  ];

  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 mx-auto max-w-6xl py-8 sm:py-12 lg:py-16'>
        {/* Hero — outcomes, not features */}
        <div className='relative mb-8 overflow-hidden rounded-3xl sm:mb-12 lg:mb-16'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div className='flex flex-col items-center text-center md:items-start md:text-left'>
                <Badge className='mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'>
                  <Sparkles className='h-3 w-3' />
                  {t('badge')}
                </Badge>
                <h1 className='mb-4 text-3xl font-bold text-balance sm:text-4xl md:text-5xl lg:text-6xl'>
                  {t('hero.title')}
                </h1>
                <p className='text-foreground/70 text-base leading-relaxed text-pretty sm:text-lg md:text-xl'>
                  {t('hero.description')}
                </p>
                <p className='text-foreground/60 mt-3 text-sm font-medium sm:text-base'>
                  {t.rich('hero.guarantee', {
                    em: (chunks) => <em>{chunks}</em>,
                    u: (chunks) => <span className='underline'>{chunks}</span>,
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid — concise, outcome-first, links to detail pages */}
        <div className='mb-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2'>
          {services.map((service) => {
            const Icon = service.icon as ElementType;
            return (
              <Card
                key={service.title}
                className='flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8'
              >
                <CardContent className='flex flex-1 flex-col'>
                  <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                    <Icon className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                  </div>
                  <h2 className='mb-2 text-xl font-bold sm:text-2xl'>{service.title}</h2>
                  <p className='text-foreground/70 mb-4 text-base leading-relaxed sm:text-lg'>
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter className='mt-auto pt-2'>
                  <Button asChild className='w-full sm:w-auto'>
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
