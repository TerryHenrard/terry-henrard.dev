'use client';

import { useTransition } from 'react';

import { Locale, useLocale, useTranslations } from 'next-intl';

import { Languages } from 'lucide-react';

import { Button } from '@/core/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/core/components/ui/dropdown-menu';

import { usePathname, useRouter } from '../lib/navigation';
import { routing } from '../lib/routing';

export function LocaleSwitcher() {
  const t = useTranslations('localeSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function onLocaleChange(nextLocale: Locale) {
    startTransition(() => {
      // No params needed since we're not using the 'pathnames' configuration
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button disabled={isPending} variant='default'>
          {t('locale', { locale })}
          <Languages className='ml-2 h-4 w-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {routing.locales.map((loc) => (
          <DropdownMenuItem key={loc} onClick={() => onLocaleChange(loc)} disabled={locale === loc}>
            {t('locale', { locale: loc })}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
