import { PropsWithChildren } from 'react';

import I18nProvider from './i18n.provider';
import { ThemeProvider } from './theme.provider';

export default function Providers({ children }: Readonly<PropsWithChildren>) {
  return (
    <I18nProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nProvider>
  );
}
