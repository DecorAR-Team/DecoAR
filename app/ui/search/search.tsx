'use client';

import { routes } from '@/app/lib/route-list';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({
  placeholder,
  redirectOnFocus,
}: {
  placeholder: string;
  redirectOnFocus: boolean;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (pathname === routes.search && inputRef.current) {
      inputRef.current.focus();
    }
  }, [pathname]);

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handleFocus = () => {
    router.push(routes.search); // Redirect to the search page from home page on focus
  };

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        ref={inputRef}
        onFocus={redirectOnFocus ? handleFocus : undefined}
        className="peer block w-full rounded-md border border-slate-400 py-[9px] pl-10 text-sm outline-2 placeholder:text-slate-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        id="search"
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
