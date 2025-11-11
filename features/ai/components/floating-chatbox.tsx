'use client';

import { useEffect } from 'react';

import { MessageSquare, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

import { Button } from '@/core/components/ui/button';
import { Card, CardContent } from '@/core/components/ui/card';

import { useFloatingChatStore } from '../stores/floating-chat.store';
import Chat from './chat';

export default function FloatingChatbox() {
  const isOpen = useFloatingChatStore((state) => state.isOpen);
  const setIsOpen = useFloatingChatStore((state) => state.setIsOpen);
  const hasShownIntro = useFloatingChatStore((state) => state.hasShownIntro);
  const setHasShownIntro = useFloatingChatStore((state) => state.setHasShownIntro);
  const setShouldShowIntro = useFloatingChatStore((state) => state.setShouldShowIntro);

  useEffect(() => {
    // Only show intro once per session
    if (hasShownIntro) return;

    const timer = setTimeout(() => {
      setShouldShowIntro(!isOpen);
      setIsOpen(true);
      setHasShownIntro(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [hasShownIntro, setIsOpen, setShouldShowIntro, setHasShownIntro, isOpen]);

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

      {/* Toggle Button */}
      <motion.div
        className='fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          size='icon'
          className='size-14 rounded-full shadow-lg'
          onClick={() => setIsOpen(!isOpen)}
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
      </motion.div>
    </>
  );
}
