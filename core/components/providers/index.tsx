import { PropsWithChildren } from 'react';

import { ThemeProvider } from './theme-provider';

export default function Providers({ children }: Readonly<PropsWithChildren>) {
  return (
    <ThemeProvider attribute={'class'} defaultTheme='system' enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
