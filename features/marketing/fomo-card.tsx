'use client';

import { useTranslations } from 'next-intl';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { firstToUpper } from '@/core/lib/utils';
import { Link } from '@/features/i18n/lib/navigation';

import CtaTriggerPhoneCallRequest from '../ai/components/cta-trigger-phone-call-request';

interface FOMOCardProps {
  variant: 'mvp-foundry' | 'ai-sprint';
}

export default function FOMOCard({ variant }: FOMOCardProps) {
  const t = useTranslations('fomoCard');

  const variantText = variant === 'mvp-foundry' ? t('message.mvpFoundry') : t('message.aiSprint');
  const promptText = variant === 'mvp-foundry' ? t('cta.mvpPrompt') : t('cta.aiSprintPrompt');

  return (
    <div className='mb-10 flex flex-col items-center justify-between gap-3 rounded-2xl border p-4 md:flex-row md:p-5'>
      <div className='flex items-center gap-2'>
        <Badge className='rounded-full' variant='destructive'>
          {t('limitedSpots')}
        </Badge>
        <span className='text-foreground/80 text-sm md:text-base'>
          {t('message.intro')} <strong>{variantText}</strong>{' '}
          {firstToUpper(new Intl.DateTimeFormat('fr-BE', { month: 'long' }).format(new Date()))}{' '}
          {t('message.intakeOpen')}
        </span>
      </div>
      <div className='flex items-center gap-2'>
        <CtaTriggerPhoneCallRequest />

        <Button asChild variant='outline'>
          <Link href='/services/audit'>{t('cta.audit')}</Link>
        </Button>
      </div>
    </div>
  );
}
