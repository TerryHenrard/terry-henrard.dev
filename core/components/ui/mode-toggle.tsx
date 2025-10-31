'use client';

import { useTheme } from 'next-themes';

import { Moon, Sun } from 'lucide-react';

import { Button } from '@/core/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/core/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  const toggleTheme = (
    event: React.MouseEvent<HTMLElement>,
    theme: 'light' | 'dark' | 'system'
  ) => {
    if ('startViewTransition' in document) {
      const x = event ? event.clientX : window.innerWidth / 2;
      const y = event ? event.clientY : window.innerHeight / 2;

      document.documentElement.style.setProperty('--x', `${x}px`);
      document.documentElement.style.setProperty('--y', `${y}px`);

      document.startViewTransition(() => setTheme(() => theme));
    } else {
      setTheme(() => theme);
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={(event) => toggleTheme(event, 'light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={(event) => toggleTheme(event, 'dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={(event) => toggleTheme(event, 'system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
