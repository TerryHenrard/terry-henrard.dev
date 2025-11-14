'use client';

import { useTranslations } from 'next-intl';

import { useIsMobile } from '@/core/hooks/use-is-mobile';
import { LocaleSwitcher } from '@/features/i18n/components/locale-switcher';
import { Link } from '@/features/i18n/lib/navigation';

import { ModeToggle } from '../ui/mode-toggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className='h-full p-4'>
          <div className='text-sm leading-none font-bold'>{title}</div>
          <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Header() {
  const { isMobile } = useIsMobile();
  const t = useTranslations();

  return (
    <header className='bg-secondary/50 fixed top-0 right-0 left-0 z-50 hidden h-16 border-b p-4 transition-colors duration-300 lg:block'>
      <div className='container mx-auto flex h-full items-center justify-between'>
        <div className='flex items-center gap-8'>
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className='gap-4'>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/' className='text-xl font-bold'>
                    {t('header.title')}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/experience'>{t('header.nav.experience')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className='bg-transparent'>
                  {t('header.nav.services.trigger')}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-2xl grid-cols-3 gap-2'>
                    <li className='row-span-2'>
                      <NavigationMenuLink asChild>
                        <Link
                          href='/services'
                          className='flex h-full w-full flex-col justify-end p-4'
                        >
                          <div className='text-lg font-bold'>{t('header.nav.services.title')}</div>
                          <p className='text-muted-foreground text-sm'>
                            {t('header.nav.services.description')}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      title={t('header.nav.services.items.audit.title')}
                      href='/services/audit'
                    >
                      {t('header.nav.services.items.audit.description')}
                    </ListItem>
                    <ListItem
                      title={t('header.nav.services.items.mvpFoundry.title')}
                      href='/services/mvp-foundry'
                    >
                      {t('header.nav.services.items.mvpFoundry.description')}
                    </ListItem>
                    <ListItem
                      title={t('header.nav.services.items.aiSprint.title')}
                      href='/services/ai-sprint'
                    >
                      {t('header.nav.services.items.aiSprint.description')}
                    </ListItem>
                    <ListItem
                      title={t('header.nav.services.items.careAndHosting.title')}
                      href='/services/care-and-hosting-plan'
                    >
                      {t('header.nav.services.items.careAndHosting.description')}
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/about'>{t('header.nav.about')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/contact'>{t('header.nav.contact')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className='flex items-center gap-4'>
          <LocaleSwitcher />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
