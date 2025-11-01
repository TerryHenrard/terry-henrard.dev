import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

import { BarChart3, Rocket, Server, Settings, ShieldCheck } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';
import { Link } from '@/features/i18n/lib/navigation';

export default async function CareAndHostingPlanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as 'en' | 'fr');
  const t = await getTranslations('careAndHosting');
  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero — Outcomes first */}
        <div className='relative mb-12 overflow-hidden rounded-3xl'>
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

        {/* Trust row — Backed by AWS & Azure */}
        <div className='bg-background/60 mb-6 inline-flex items-center gap-4 rounded-2xl border px-4 py-2 backdrop-blur'>
          <span
            className='text-foreground/70 text-xs font-medium'
            dangerouslySetInnerHTML={{ __html: t.raw('trust.text') }}
          />
          <span className='bg-foreground/10 h-4 w-px' />
          <div className='flex items-center gap-3'>
            <Image
              src='/aws.svg'
              alt='AWS (Amazon)'
              className='h-5 w-auto opacity-80 transition-opacity hover:opacity-100'
              height={50}
              width={50}
            />
            <Image
              src='/azure.svg'
              alt='Azure (Microsoft)'
              className='h-5 w-auto opacity-80 transition-opacity hover:opacity-100'
              height={50}
              width={50}
            />
          </div>
        </div>

        {/* Outcome pillars (no tech jargon) */}
        <div className='mb-12 grid gap-6 md:grid-cols-4'>
          {[
            { icon: Server, key: '0' },
            { icon: Rocket, key: '1' },
            { icon: Settings, key: '2' },
            { icon: BarChart3, key: '3' },
          ].map((item) => (
            <Card key={item.key} className='rounded-3xl p-6'>
              <CardContent>
                <div className='bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-xl'>
                  <item.icon className='text-primary h-5 w-5' />
                </div>
                <h4 className='mb-1 font-semibold'>{t(`outcomes.${item.key}.title` as any)}</h4>
                <p
                  className='text-foreground/70 text-sm'
                  dangerouslySetInnerHTML={{
                    __html: t.raw(`outcomes.${item.key}.description` as any),
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Plans — outcome copy + simple SLAs */}
        <div className='mb-12 grid gap-6 md:grid-cols-3'>
          {/* Lite */}
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>{t('plans.lite.title')}</h3>
              <p className='text-foreground/70 mb-3 text-sm'>{t('plans.lite.bestFor')}</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2 text-sm'>
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: t.raw(`plans.lite.items.${i}` as any) }}
                  />
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className='w-full'>
                <Link href='/contact'>{t('plans.lite.cta')}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Pro */}
          <Card className='ring-primary/20 flex flex-col justify-between rounded-3xl p-8 ring-1'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>{t('plans.pro.title')}</h3>
              <p className='text-foreground/70 mb-3 text-sm'>{t('plans.pro.bestFor')}</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2 text-sm'>
                {[0, 1, 2, 3, 4].map((i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: t.raw(`plans.pro.items.${i}` as any) }}
                  />
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className='w-full'>
                <Link href='/contact'>{t('plans.pro.cta')}</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Venture */}
          <Card className='flex flex-col justify-between rounded-3xl p-8'>
            <CardContent>
              <h3 className='mb-2 text-xl font-bold'>{t('plans.venture.title')}</h3>
              <p className='text-foreground/70 mb-3 text-sm'>{t('plans.venture.bestFor')}</p>
              <ul className='text-foreground/80 list-inside list-disc space-y-2 text-sm'>
                {[0, 1, 2, 3, 4].map((i) => (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{ __html: t.raw(`plans.venture.items.${i}` as any) }}
                  />
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className='w-full'>
                <Link href='/contact'>{t('plans.venture.cta')}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Risk reversal / Guarantees */}
        <div className='mb-10 rounded-3xl border p-6'>
          <div className='mb-3 flex items-center gap-2'>
            <ShieldCheck className='text-primary h-5 w-5' />
            <h4 className='font-semibold'>{t('guarantees.title')}</h4>
          </div>
          <ul className='text-foreground/80 list-inside list-disc space-y-2 text-sm'>
            {[0, 1, 2].map((i) => (
              <li
                key={i}
                dangerouslySetInnerHTML={{ __html: t.raw(`guarantees.items.${i}` as any) }}
              />
            ))}
          </ul>
        </div>

        {/* Final CTA */}
        <div className='mb-2 flex flex-col items-center gap-3 text-center'>
          <div className='flex flex-col items-center gap-3 sm:flex-row'>
            <Button asChild>
              <Link href='/services/audit'>{t('cta.primary')}</Link>
            </Button>
            <Button asChild variant='outline'>
              <Link href={`/?prompt=${encodeURIComponent(t('cta.secondary'))}`}>
                {t('cta.secondary')}
              </Link>
            </Button>
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
