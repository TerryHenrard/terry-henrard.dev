'use client';

import { useIsMobile } from '@/core/hooks/use-mobile';
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
        <Link href={href} className='p-4'>
          <div className='text-sm leading-none font-bold'>{title}</div>
          <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

const services: { title: string; href: string; description: string }[] = [
  {
    title: 'Audit',
    href: '/services/audit',
    description: 'Building responsive and dynamic websites tailored to your needs',
  },
  {
    title: 'MVP Foundry',
    href: '/services/mvp-foundry',
    description: 'from zero to a usable product in 4 to 6 weeks',
  },
  {
    title: 'AI Sprint',
    href: '/services/ai-sprint',
    description: 'deliver true AI functionality in 14 days, not months',
  },
  {
    title: 'Care & Hosting Plan',
    href: '/services/care-and-hosting-plan',
    description: 'Building responsive and dynamic websites tailored to your needs',
  },
];

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className='bg-secondary/50 fixed top-0 right-0 left-0 z-50 h-16 border-b p-4 transition-colors duration-300'>
      <div className='container mx-auto flex h-full items-center justify-between'>
        <div className='flex items-center gap-8'>
          {/* <Link className="font-bold text-xl" href="/">
            AI
          </Link> */}
          <NavigationMenu viewport={isMobile}>
            <NavigationMenuList className='gap-4'>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/' className='text-xl font-bold'>
                    Terry's assistant
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/experience'>My Experience</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className='bg-transparent'>
                  My services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-2xl grid-cols-3 gap-2'>
                    <li className='row-span-2'>
                      <NavigationMenuLink asChild>
                        <Link
                          href='/services'
                          className='flex h-full w-full flex-col justify-end p-4'
                        >
                          <div className='text-lg font-bold'>Services</div>
                          <p className='text-muted-foreground text-sm'>
                            Explore the wide range of services I offer to help you achieve your
                            goals
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {services.map((service) => (
                      <ListItem key={service.title} title={service.title} href={service.href}>
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/about'>About Me</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href='/contact'>Let's Connect</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}
