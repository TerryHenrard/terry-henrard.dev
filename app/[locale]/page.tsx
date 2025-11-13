import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import * as motion from 'motion/react-client';

import { Button } from '@/core/components/ui/button';
import { TextEffect } from '@/core/components/ui/text-effect';
import CtaTriggerPhoneCallRequest from '@/features/ai/components/cta-trigger-phone-call-request';
import { Link } from '@/features/i18n/lib/navigation';
import CurrentlyAvailablePing from '@/features/marketing/components/currently-available-ping';

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');

  return (
    <main className='relative z-10 container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center'>
      {/* Hero Section - content will be added later */}
      <section className='w-full pb-14'>
        <div className=''>
          <div className='relative mx-auto flex max-w-6xl flex-col px-6 lg:flex-row lg:items-center'>
            <div className='mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left'>
              <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }}
              >
                <CurrentlyAvailablePing
                  className='mb-6'
                  variant={'secondary'}
                  text={t('hero.availableBadge')}
                />
              </motion.div>

              <h1>
                <TextEffect
                  as='span'
                  preset='fade-in-blur'
                  speedReveal={1.1}
                  speedSegment={0.3}
                  className='mt-8 w-full max-w-2xl text-5xl font-medium text-balance md:text-6xl lg:mt-16 xl:text-7xl'
                >
                  {t('hero.title.prefix') +
                    ' ' +
                    t('hero.title.highlight') +
                    ' ' +
                    t('hero.title.suffix')}
                </TextEffect>
              </h1>
              <TextEffect
                className='mt-8 max-w-2xl text-lg text-pretty'
                as='p'
                per='line'
                preset='fade-in-blur'
                speedReveal={1}
                speedSegment={0.45}
                delay={0.5}
              >
                {t('hero.description') +
                  ' ' +
                  t('hero.descriptionHighlight') +
                  ' ' +
                  t('hero.descriptionSuffix')}
              </TextEffect>

              <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
                className='mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start'
              >
                <CtaTriggerPhoneCallRequest className='text-base' size={'lg'} />
                <Button asChild size={'lg'} variant={'ghost'} className='text-base'>
                  <Link href='/contact'>{t('hero.cta.contact')}</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='bg-background'>
        <div className='group relative m-auto max-w-6xl px-6'>
          <div className='flex flex-col items-center md:flex-row'>
            <div className='md:max-w-44 md:border-r md:pr-6'>
              <p className='text-end text-sm'>The best companies trusted me</p>
            </div>
            <div className='relative py-6 md:w-[calc(100%-11rem)]'>
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                <div className='flex'>
                  <img
                    className='mx-auto h-5 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/nvidia.svg'
                    alt='Nvidia Logo'
                    height='20'
                    width='auto'
                  />
                </div>

                <div className='flex'>
                  <img
                    className='mx-auto h-4 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/column.svg'
                    alt='Column Logo'
                    height='16'
                    width='auto'
                  />
                </div>
                <div className='flex'>
                  <img
                    className='mx-auto h-4 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/github.svg'
                    alt='GitHub Logo'
                    height='16'
                    width='auto'
                  />
                </div>
                <div className='flex'>
                  <img
                    className='mx-auto h-5 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/nike.svg'
                    alt='Nike Logo'
                    height='20'
                    width='auto'
                  />
                </div>
                <div className='flex'>
                  <img
                    className='mx-auto h-5 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/lemonsqueezy.svg'
                    alt='Lemon Squeezy Logo'
                    height='20'
                    width='auto'
                  />
                </div>
                <div className='flex'>
                  <img
                    className='mx-auto h-4 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/laravel.svg'
                    alt='Laravel Logo'
                    height='16'
                    width='auto'
                  />
                </div>
                <div className='flex'>
                  <img
                    className='mx-auto h-7 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/lilly.svg'
                    alt='Lilly Logo'
                    height='28'
                    width='auto'
                  />
                </div>

                <div className='flex'>
                  <img
                    className='mx-auto h-6 w-fit dark:invert'
                    src='https://html.tailus.io/blocks/customers/openai.svg'
                    alt='OpenAI Logo'
                    height='24'
                    width='auto'
                  />
                </div>
              </InfiniteSlider>

              <ProgressiveBlur
                className='pointer-events-none absolute top-0 left-0 h-full w-20'
                direction='left'
                blurIntensity={1}
              />
              <ProgressiveBlur
                className='pointer-events-none absolute top-0 right-0 h-full w-20'
                direction='right'
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
