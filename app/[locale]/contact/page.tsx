import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Clock, Languages, Linkedin, Mail, Phone, ShieldCheck, Sparkles } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';

const LINKEDIN_URL = 'https://www.linkedin.com/in/terry-henrard';

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('contact');

  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden px-4 sm:px-6 lg:px-8'>
      <div className='relative z-10 mx-auto max-w-6xl py-8 sm:py-12 lg:py-16'>
        {/* Hero */}
        <div className='relative mb-8 overflow-hidden rounded-3xl sm:mb-12 lg:mb-16'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='p-0'>
              <div className='flex flex-col items-center text-center md:items-start md:text-left'>
                <div className='mb-4 flex flex-wrap items-center justify-center gap-2 md:justify-start'>
                  <Badge
                    variant='default'
                    className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'
                  >
                    <Sparkles className='h-3 w-3' />
                    {t('badges.connect')}
                  </Badge>
                  <Badge
                    variant='secondary'
                    className='inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium'
                  >
                    <Languages className='h-3 w-3' />
                    {t('badges.languages')}
                  </Badge>
                </div>

                <h1 className='mb-4 text-3xl font-bold text-balance sm:text-4xl md:text-5xl lg:text-6xl'>
                  {t('hero.title')}
                </h1>

                <p className='text-foreground/70 text-base leading-relaxed text-pretty sm:text-lg md:text-xl'>
                  {t('hero.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Options */}
        <div className='mb-8 grid gap-4 sm:mb-12 sm:gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* Email */}
          <Card className='flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                <Mail className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
              </div>
              <h2 className='mb-2 text-xl font-bold sm:mb-3 sm:text-2xl'>
                {t('methods.email.title')}
              </h2>
              <p className='text-foreground/70 mb-4 text-base leading-relaxed sm:text-lg'>
                {t('methods.email.description')}
              </p>
            </CardContent>
            <CardFooter className='mt-auto pt-2'>
              <Button asChild className='w-full sm:w-auto'>
                <a href='mailto:terry.henrard@outlook.com'>
                  <Mail className='mr-1' /> {t('methods.email.button')}
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Call / Text */}
          <Card className='flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                <Phone className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
              </div>
              <h2 className='mb-2 text-xl font-bold sm:mb-3 sm:text-2xl'>
                {t('methods.call.title')}
              </h2>
              <p className='text-foreground/70 mb-4 text-base leading-relaxed sm:text-lg'>
                {t('methods.call.description')}
              </p>
            </CardContent>
            <CardFooter className='mt-auto pt-2'>
              <Button asChild variant='secondary' className='w-full sm:w-auto'>
                <a href='tel:+32498146651'>
                  <Phone className='mr-1' /> {t('methods.call.button')}
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* LinkedIn */}
          <Card className='flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 sm:p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                <Linkedin className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
              </div>
              <h2 className='mb-2 text-xl font-bold sm:mb-3 sm:text-2xl'>
                {t('methods.linkedin.title')}
              </h2>
              <p className='text-foreground/70 mb-4 text-base leading-relaxed sm:text-lg'>
                {t('methods.linkedin.description')}
              </p>
            </CardContent>
            <CardFooter className='mt-auto pt-2'>
              <Button asChild variant='outline' className='w-full sm:w-auto'>
                <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer'>
                  <Linkedin className='mr-1' /> {t('methods.linkedin.button')}
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Office Hours & Response Policy */}
        <div className='mb-8 grid gap-4 sm:mb-12 sm:gap-6 md:grid-cols-2'>
          <Card className='rounded-3xl p-6 sm:p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                <Clock className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
              </div>
              <h2 className='mb-2 text-xl font-bold sm:mb-3 sm:text-2xl'>
                {t('info.workingHours.title')}
              </h2>
              <p className='text-foreground/70 text-base leading-relaxed sm:text-lg'>
                {t('info.workingHours.description')}
              </p>
            </CardContent>
          </Card>

          <Card className='rounded-3xl p-6 sm:p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-10 w-10 items-center justify-center rounded-2xl sm:h-12 sm:w-12'>
                <ShieldCheck className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
              </div>
              <h2 className='mb-2 text-xl font-bold sm:mb-3 sm:text-2xl'>
                {t('info.privacy.title')}
              </h2>
              <p className='text-foreground/70 text-base leading-relaxed sm:text-lg'>
                {t('info.privacy.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
