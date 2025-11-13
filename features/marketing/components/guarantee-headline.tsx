'use client';

import type { ReactNode } from 'react';

import { useTranslations } from 'next-intl';

export default function GuaranteeHeadline() {
  const t = useTranslations('guarantee');

  return (
    <p className='text-foreground/70 mt-3'>
      {t.rich('text', {
        strong: (chunks: ReactNode) => <strong className='font-semibold'>{chunks}</strong>,
        span: (chunks: ReactNode) => <span className='font-bold underline'>{chunks}</span>,
      })}
    </p>
  );
}
