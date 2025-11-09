import { create } from 'zustand';

interface FloatingChatStoreState {
  isOpen: boolean;
  prompt?: string | null;

  setIsOpen: (isOpen: boolean) => void;
  setPrompt: (prompt: string | null | undefined) => void;
}

export const useFloatingChatStore = create<FloatingChatStoreState>()((set) => ({
  isOpen: false,
  prompt: null,

  setIsOpen: (isOpen) => set(() => ({ isOpen })),
  setPrompt: (prompt) => set(() => ({ prompt })),
}));
