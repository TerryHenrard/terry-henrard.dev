import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

import { Card, CardContent } from '@/core/components/ui/card';
import Chat from '@/features/ai/components/chat';

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('HomePage');
  console.log(t('title'));

  return (
    <main className='container mx-auto h-[calc(100vh-4rem)] py-4'>
      <Link href='/about' className='underline'>
        About
      </Link>
      <div className='relative z-10 h-full'>
        <Card className='h-full border-0 bg-transparent shadow-none'>
          <CardContent className='h-full'>
            <Chat />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
