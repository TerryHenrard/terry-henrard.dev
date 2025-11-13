'use client';

import { useTranslations } from 'next-intl';

import { Button, ShadcnButtonProps } from '@/core/components/ui/button';

import { useFloatingChatStore } from '../stores/floating-chat.store';

export default function CtaTriggerPhoneCallRequest(props: ShadcnButtonProps) {
  const t = useTranslations('cta-trigger-phone-call-request');

  const setIsOpen = useFloatingChatStore((state) => state.setIsOpen);
  const setPrompt = useFloatingChatStore((state) => state.setPrompt);

  return (
    <Button
      className='transition-all duration-300 hover:-translate-y-0.5'
      onClick={() => {
        setIsOpen(true);
        setPrompt(t('prompt'));
      }}
      {...props}
    >
      {t('text')}
    </Button>
  );
}
