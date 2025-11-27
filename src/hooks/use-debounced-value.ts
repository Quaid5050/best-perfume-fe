import { useDebounce } from 'use-debounce';

/**
 * Hook to debounce a value
 * Useful for search inputs, form fields, etc.
 * 
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default: 500)
 * @returns Debounced value
 * 
 * @example
 * const [search, setSearch] = useState('');
 * const [debouncedSearch] = useDebounce(search, 500);
 * 
 * useEffect(() => {
 *   // This will only run when debouncedSearch changes
 *   fetchResults(debouncedSearch);
 * }, [debouncedSearch]);
 */
export { useDebounce };

