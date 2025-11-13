'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { MenuIcon } from 'lucide-react';

import { LocaleSwitcher } from '@/features/i18n/components/locale-switcher';
import { Link, usePathname } from '@/features/i18n/lib/navigation';

import { Button } from '../ui/button';
import { ModeToggle } from '../ui/mode-toggle';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

export default function MobileHeader() {
  const t = useTranslations();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Get page title based on current pathname
  const getPageTitle = () => {
    if (pathname === '/') return t('header.title');
    if (pathname === '/experience') return t('header.nav.experience');
    if (pathname === '/about') return t('header.nav.about');
    if (pathname === '/contact') return t('header.nav.contact');
    if (pathname.startsWith('/services')) {
      if (pathname === '/services') return t('header.nav.services.title');
      if (pathname === '/services/audit') return t('header.nav.services.items.audit.title');
      if (pathname === '/services/mvp-foundry')
        return t('header.nav.services.items.mvpFoundry.title');
      if (pathname === '/services/ai-sprint') return t('header.nav.services.items.aiSprint.title');
      if (pathname === '/services/care-and-hosting-plan')
        return t('header.nav.services.items.careAndHosting.title');
    }
    return t('header.title');
  };

  return (
    <header className='bg-secondary/50 fixed top-0 right-0 left-0 z-50 h-16 border-b p-4 transition-colors duration-300 lg:hidden'>
      <div className='container mx-auto flex h-full items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='text-xl font-bold'>
          {t('header.title')}
        </Link>

        {/* Right side: Locale Switcher, Mode Toggle, and Hamburger Menu */}
        <div className='flex items-center gap-2'>
          <LocaleSwitcher />
          <ModeToggle />

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' aria-label='Open menu'>
                <MenuIcon className='size-5' />
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-full p-0'>
              <div className='flex h-full flex-col p-6'>
                <SheetHeader className='mb-8 p-0'>
                  <SheetTitle className='text-left text-2xl'>{getPageTitle()}</SheetTitle>
                </SheetHeader>

                {/* Navigation Links */}
                <nav className='flex flex-1 flex-col gap-3 overflow-y-auto'>
                  <Button
                    asChild
                    variant='outline'
                    size='lg'
                    className='h-auto justify-start py-4 text-left'
                  >
                    <Link href='/' onClick={() => setOpen(false)}>
                      {t('header.nav.home')}
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant='outline'
                    size='lg'
                    className='h-auto justify-start py-4 text-left'
                  >
                    <Link href='/experience' onClick={() => setOpen(false)}>
                      {t('header.nav.experience')}
                    </Link>
                  </Button>

                  {/* Services Section */}
                  <div className='flex flex-col gap-2'>
                    <Button
                      asChild
                      variant='outline'
                      size='lg'
                      className='h-auto justify-start py-4 text-left'
                    >
                      <Link href='/services' onClick={() => setOpen(false)}>
                        {t('header.nav.services.trigger')}
                      </Link>
                    </Button>

                    {/* Service Items with hierarchy */}
                    <div className='relative ml-4 flex flex-col gap-2'>
                      {/* Vertical line for hierarchy */}
                      <div className='bg-border absolute top-0 bottom-0 left-0 w-px' />

                      <div className='relative flex min-w-0 items-start gap-0'>
                        {/* Branch connector */}
                        <div className='bg-border absolute top-6 left-0 h-px w-3' />
                        <Button
                          asChild
                          variant='ghost'
                          size='lg'
                          className='h-auto min-w-0 flex-1 justify-start py-3 pl-4 text-left whitespace-normal'
                        >
                          <Link
                            href='/services/audit'
                            onClick={() => setOpen(false)}
                            className='flex min-w-0 flex-col items-start gap-1'
                          >
                            <span className='w-full text-base font-semibold text-balance'>
                              {t('header.nav.services.items.audit.title')}
                            </span>
                            <span className='text-muted-foreground w-full text-xs font-normal text-balance'>
                              {t('header.nav.services.items.audit.description')}
                            </span>
                          </Link>
                        </Button>
                      </div>

                      <div className='relative flex min-w-0 items-start gap-0'>
                        {/* Branch connector */}
                        <div className='bg-border absolute top-6 left-0 h-px w-3' />
                        <Button
                          asChild
                          variant='ghost'
                          size='lg'
                          className='h-auto min-w-0 flex-1 justify-start py-3 pl-4 text-left whitespace-normal'
                        >
                          <Link
                            href='/services/mvp-foundry'
                            onClick={() => setOpen(false)}
                            className='flex min-w-0 flex-col items-start gap-1'
                          >
                            <span className='w-full text-base font-semibold text-balance'>
                              {t('header.nav.services.items.mvpFoundry.title')}
                            </span>
                            <span className='text-muted-foreground w-full text-xs font-normal text-balance'>
                              {t('header.nav.services.items.mvpFoundry.description')}
                            </span>
                          </Link>
                        </Button>
                      </div>

                      <div className='relative flex min-w-0 items-start gap-0'>
                        {/* Branch connector */}
                        <div className='bg-border absolute top-6 left-0 h-px w-3' />
                        <Button
                          asChild
                          variant='ghost'
                          size='lg'
                          className='h-auto min-w-0 flex-1 justify-start py-3 pl-4 text-left whitespace-normal'
                        >
                          <Link
                            href='/services/ai-sprint'
                            onClick={() => setOpen(false)}
                            className='flex min-w-0 flex-col items-start gap-1'
                          >
                            <span className='w-full text-base font-semibold text-balance'>
                              {t('header.nav.services.items.aiSprint.title')}
                            </span>
                            <span className='text-muted-foreground w-full text-xs font-normal text-balance'>
                              {t('header.nav.services.items.aiSprint.description')}
                            </span>
                          </Link>
                        </Button>
                      </div>

                      <div className='relative flex min-w-0 items-start gap-0'>
                        {/* Branch connector for last item */}
                        <div className='bg-border absolute top-6 left-0 h-px w-3' />
                        <Button
                          asChild
                          variant='ghost'
                          size='lg'
                          className='h-auto min-w-0 flex-1 justify-start py-3 pl-4 text-left whitespace-normal'
                        >
                          <Link
                            href='/services/care-and-hosting-plan'
                            onClick={() => setOpen(false)}
                            className='flex min-w-0 flex-col items-start gap-1'
                          >
                            <span className='w-full text-base font-semibold text-balance'>
                              {t('header.nav.services.items.careAndHosting.title')}
                            </span>
                            <span className='text-muted-foreground w-full text-xs font-normal text-balance'>
                              {t('header.nav.services.items.careAndHosting.description')}
                            </span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant='outline'
                    size='lg'
                    className='h-auto justify-start py-4 text-left'
                  >
                    <Link href='/about' onClick={() => setOpen(false)}>
                      {t('header.nav.about')}
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant='outline'
                    size='lg'
                    className='h-auto justify-start py-4 text-left'
                  >
                    <Link href='/contact' onClick={() => setOpen(false)}>
                      {t('header.nav.contact')}
                    </Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
