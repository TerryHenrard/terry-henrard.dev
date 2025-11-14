import { useSyncExternalStore } from 'react';

/**
 * Hook to determine if the component is mounted on the client side.
 * @returns {boolean} True if running on the client, false otherwise.
 */
export function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
