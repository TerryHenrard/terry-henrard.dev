import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('home');

  return (
    <main className='container mx-auto min-h-[calc(100vh-4rem)] py-8'>
      {/* Hero Section - content will be added later */}
      <section className='flex min-h-[calc(100vh-8rem)] items-center justify-center'>
        <div className='text-center'>{/* Hero content placeholder */}</div>
      </section>
    </main>
  );
}
