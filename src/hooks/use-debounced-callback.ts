import { useDebouncedCallback } from 'use-debounce';

/**
 * Hook to debounce a callback function
 * Useful for event handlers that should not fire on every keystroke
 * 
 * @param callback - The function to debounce
 * @param delay - Delay in milliseconds (default: 500)
 * @returns Debounced callback function
 * 
 * @example
 * const debouncedSearch = useDebouncedCallback((value: string) => {
 *   fetchResults(value);
 * }, 500);
 * 
 * <input onChange={(e) => debouncedSearch(e.target.value)} />
 */
export { useDebouncedCallback };

