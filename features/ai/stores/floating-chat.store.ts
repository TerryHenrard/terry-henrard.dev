import { create } from 'zustand';

interface FloatingChatStoreState {
  isOpen: boolean;
  prompt?: string | null;
  hasShownIntro: boolean;
  shouldShowIntro: boolean;
  showNotificationBadge: boolean;

  setIsOpen: (isOpen: boolean) => void;
  setPrompt: (prompt: string | null | undefined) => void;
  setHasShownIntro: (hasShownIntro: boolean) => void;
  setShouldShowIntro: (shouldShowIntro: boolean) => void;
  setShowNotificationBadge: (show: boolean) => void;
}

export const useFloatingChatStore = create<FloatingChatStoreState>()((set) => ({
  isOpen: false,
  prompt: null,
  hasShownIntro: false,
  shouldShowIntro: false,
  showNotificationBadge: false,

  setIsOpen: (isOpen) => set(() => ({ isOpen })),
  setPrompt: (prompt) => set(() => ({ prompt })),
  setHasShownIntro: (hasShownIntro) => set(() => ({ hasShownIntro })),
  setShouldShowIntro: (shouldShowIntro) => set(() => ({ shouldShowIntro })),
  setShowNotificationBadge: (show) => set(() => ({ showNotificationBadge: show })),
}));
