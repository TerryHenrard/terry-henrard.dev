'use client';

import { useTranslations } from 'next-intl';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { firstToUpper } from '@/core/lib/utils';
import { Link } from '@/features/i18n/lib/navigation';

import CtaTriggerPhoneCallRequest from '../../ai/components/cta-trigger-phone-call-request';

interface FOMOCardProps {
  variant: 'mvp-foundry' | 'ai-sprint';
}

export default function FOMOCard({ variant }: FOMOCardProps) {
  const t = useTranslations('fomoCard');

  const variantText = variant === 'mvp-foundry' ? t('message.mvpFoundry') : t('message.aiSprint');
  const variantCTA = variant === 'mvp-foundry' ? t('cta.mvp-audit') : t('cta.ai-audit');

  return (
    <div className='mb-10 flex flex-col items-center justify-between gap-3 rounded-2xl border p-4 md:flex-row md:p-5'>
      <div className='flex items-center gap-2'>
        <div className='relative'>
          <span className='bg-destructive absolute inline-flex h-full w-full animate-ping rounded-full opacity-75'></span>
          <Badge className='relative rounded-full' variant='destructive'>
            {t('limitedSpots')}
          </Badge>
        </div>
        <span className='text-foreground/80 text-sm md:text-base'>
          {t('message.intro')} <strong>{variantText}</strong>{' '}
          {firstToUpper(new Intl.DateTimeFormat('fr-BE', { month: 'long' }).format(new Date()))}{' '}
          {t('message.intakeOpen')}
        </span>
      </div>
      <div className='flex items-center gap-2'>
        <CtaTriggerPhoneCallRequest />

        <Button asChild variant='outline'>
          <Link href='/services/audit'>{variantCTA}</Link>
        </Button>
      </div>
    </div>
  );
}
