'use client';

import { useEffect } from 'react';

import { useTranslations } from 'next-intl';

import { MessageSquare, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { Badge } from '@/core/components/ui/badge';
import { Button } from '@/core/components/ui/button';
import { Card, CardContent } from '@/core/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/core/components/ui/dialog';
import { useIsClient } from '@/core/hooks/use-is-client';
import { useIsMobile } from '@/core/hooks/use-is-mobile';

import { useFloatingChatStore } from '../stores/floating-chat.store';
import Chat from './chat';

export default function FloatingChatbox() {
  const t = useTranslations('home.chat');

  const isClient = useIsClient();

  const { isMobile } = useIsMobile();

  const isOpen = useFloatingChatStore((state) => state.isOpen);
  const setIsOpen = useFloatingChatStore((state) => state.setIsOpen);
  const hasShownIntro = useFloatingChatStore((state) => state.hasShownIntro);
  const setHasShownIntro = useFloatingChatStore((state) => state.setHasShownIntro);
  const setShouldShowIntro = useFloatingChatStore((state) => state.setShouldShowIntro);
  const showNotificationBadge = useFloatingChatStore((state) => state.showNotificationBadge);
  const setShowNotificationBadge = useFloatingChatStore((state) => state.setShowNotificationBadge);

  useEffect(() => {
    // Only show notification badge once per session
    if (!isClient || hasShownIntro) return;

    const timer = setTimeout(() => {
      setShowNotificationBadge(true);
      setShouldShowIntro(true); // Set intro message to show when chat opens
      setHasShownIntro(true);
    }, 10000); // 10 seconds

    if (isOpen) {
      setShowNotificationBadge(false);
      setShouldShowIntro(false);
      setHasShownIntro(true);
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [
    isClient,
    hasShownIntro,
    setShowNotificationBadge,
    setShouldShowIntro,
    setHasShownIntro,
    isOpen,
  ]);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
    // Hide notification badge when chat is opened
    if (!isOpen && showNotificationBadge) {
      setShowNotificationBadge(false);
    }
  };

  // Don't render anything on the server
  if (!isClient) return null;

  // Mobile view: Full-screen Dialog
  if (isMobile) {
    return (
      <>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent
            className='flex h-dvh max-h-dvh w-screen max-w-none flex-col gap-0 rounded-none p-0 sm:max-w-none [&>button]:top-4 [&>button]:right-4'
            onOpenAutoFocus={(event) => event.preventDefault()}
          >
            <DialogHeader className='shrink-0 border-b px-4 py-3'>
              <DialogTitle>{t('title')}</DialogTitle>
            </DialogHeader>
            <div className='flex-1 overflow-hidden px-4 pt-2 pb-4'>
              <Chat />
            </div>
          </DialogContent>
        </Dialog>

        {/* Toggle Button - Mobile */}
        <motion.div
          className='fixed right-4 bottom-4 z-50'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className='relative'>
            <Button
              size='icon'
              className='size-14 rounded-full shadow-lg'
              onClick={handleToggleChat}
              aria-label='Toggle chat'
            >
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className='size-6' /> : <MessageSquare className='size-6' />}
              </motion.div>
            </Button>
            <AnimatePresence>
              {showNotificationBadge && !isOpen && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className='absolute -top-1 -right-1'
                >
                  {/* eslint-disable-next-line react/jsx-no-literals */}
                  <Badge className='size-4 bg-red-400 p-0'>1</Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </>
    );
  }

  // Desktop view: Floating Card
  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className='fixed right-4 bottom-24 z-50 sm:right-6 sm:bottom-20'
          >
            <Card className='h-[600px] w-[450px] p-0 shadow-2xl'>
              <CardContent className='relative h-full p-4'>
                {/* Close Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Button
                    variant='ghost'
                    size='icon'
                    className='absolute top-2 right-2 z-10'
                    onClick={() => setIsOpen(false)}
                  >
                    <X className='size-5' />
                  </Button>
                </motion.div>
                {/* Chat Component */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className='h-full pt-8'
                >
                  <Chat />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - Desktop */}
      <motion.div
        className='fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className='relative'>
          <Button
            size='icon'
            className='size-14 rounded-full shadow-lg'
            onClick={handleToggleChat}
            aria-label='Toggle chat'
          >
            <motion.div
              key={isOpen ? 'close' : 'open'}
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className='size-6' /> : <MessageSquare className='size-6' />}
            </motion.div>
          </Button>
          <AnimatePresence>
            {showNotificationBadge && !isOpen && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className='absolute -top-1 -right-1'
              >
                {/* eslint-disable-next-line react/jsx-no-literals */}
                <Badge className='size-4 bg-red-400 p-0'>1</Badge>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
