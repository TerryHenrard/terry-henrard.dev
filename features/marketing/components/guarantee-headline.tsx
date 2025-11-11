'use client';

import { useTranslations } from 'next-intl';

export default function GuaranteeHeadline() {
  const t = useTranslations('guarantee');

  return (
    <p className='text-foreground/70 mt-3' dangerouslySetInnerHTML={{ __html: t.raw('text') }} />
  );
}
