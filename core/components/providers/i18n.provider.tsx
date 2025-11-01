import { PropsWithChildren } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function I18nProvider({ children }: Readonly<PropsWithChildren>) {
  const messages = await getMessages();
  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
