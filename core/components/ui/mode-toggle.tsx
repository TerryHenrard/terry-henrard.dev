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
import { firstToUpper } from '@/core/lib/utils';

type Theme = 'light' | 'dark' | 'system';

const modes: Theme[] = ['light', 'dark', 'system'];

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = (event: React.MouseEvent<HTMLElement>, newTheme: Theme) => {
    if ('startViewTransition' in document) {
      const x = event ? event.clientX : window.innerWidth / 2;
      const y = event ? event.clientY : window.innerHeight / 2;

      document.documentElement.style.setProperty('--x', `${x}px`);
      document.documentElement.style.setProperty('--y', `${y}px`);

      document.startViewTransition(() => setTheme(() => newTheme));
    } else {
      setTheme(() => newTheme);
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='default' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {modes.map((mode) => (
          <DropdownMenuItem
            key={mode}
            onClick={(event) => toggleTheme(event, mode)}
            disabled={theme === mode}
          >
            {firstToUpper(mode)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
