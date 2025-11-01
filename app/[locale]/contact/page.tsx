import { getTranslations, setRequestLocale } from 'next-intl/server';

import { Clock, Languages, Linkedin, Mail, Phone, ShieldCheck, Sparkles } from 'lucide-react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent, CardFooter } from '@/core/components/ui/card';

const LINKEDIN_URL = 'https://www.linkedin.com/in/terry-henrard';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'fr' }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <main className='relative container mx-auto min-h-[calc(100vh-4rem)] overflow-hidden'>
      <div className='relative z-10 mx-auto max-w-6xl px-4 py-8'>
        {/* Hero */}
        <div className='relative mb-12 overflow-hidden rounded-3xl'>
          <Card className='relative border-0 bg-transparent'>
            <CardContent className='rounded-2xl'>
              <div className='mb-4 inline-flex items-center gap-2'>
                <Badge variant='default' className='px-4 py-1.5'>
                  <Sparkles className='h-3 w-3' />
                  <span className='ml-1'>{t('badges.connect')}</span>
                </Badge>
                <Badge variant='secondary' className='ml-2 px-4 py-1.5'>
                  <Languages className='h-3 w-3' />
                  <span className='ml-1'>{t('badges.languages')}</span>
                </Badge>
              </div>

              <h1 className='mb-4 text-4xl font-bold text-balance md:text-6xl'>
                {t('hero.title')}
              </h1>

              <p className='text-foreground/70 text-lg leading-relaxed text-pretty md:text-xl'>
                {t('hero.description')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Options */}
        <div className='mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* Email */}
          <Card className='justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Mail className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-3 text-2xl font-bold'>{t('methods.email.title')}</h2>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                {t('methods.email.description')}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a href='mailto:terry.henrard@outlook.com' className='w-full'>
                  <Mail className='mr-1' /> {t('methods.email.button')}
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Call / Text */}
          <Card className='justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Phone className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-3 text-2xl font-bold'>{t('methods.call.title')}</h2>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                {t('methods.call.description')}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant='secondary'>
                <a href='tel:+32498146651' className='w-full'>
                  <Phone className='mr-1' /> {t('methods.call.button')}
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* LinkedIn */}
          <Card className='justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Linkedin className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-3 text-2xl font-bold'>{t('methods.linkedin.title')}</h2>
              <p className='text-foreground/70 mb-4 leading-relaxed'>
                {t('methods.linkedin.description')}
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant='outline'>
                <a href={LINKEDIN_URL} target='_blank' rel='noopener noreferrer' className='w-full'>
                  <Linkedin className='mr-1' /> {t('methods.linkedin.button')}
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Office Hours & Response Policy */}
        <div className='mb-12 grid gap-6 md:grid-cols-2'>
          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <Clock className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-3 text-2xl font-bold'>{t('info.workingHours.title')}</h2>
              <p className='text-foreground/70 leading-relaxed'>
                {t('info.workingHours.description')}
              </p>
            </CardContent>
          </Card>

          <Card className='rounded-3xl p-8'>
            <CardContent>
              <div className='bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl'>
                <ShieldCheck className='text-primary h-6 w-6' />
              </div>
              <h2 className='mb-3 text-2xl font-bold'>{t('info.privacy.title')}</h2>
              <p className='text-foreground/70 leading-relaxed'>{t('info.privacy.description')}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
