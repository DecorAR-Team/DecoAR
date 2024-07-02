import { getPagesCount } from '@/app/lib/data';
import Pagination from '@/app/ui/search/pagination';
import Search from '@/app/ui/search/search';
import SearchList from '@/app/ui/search/search-list';
import { Suspense } from 'react';

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getPagesCount(query);

  return (
    <div className="pb-5 w-full flex-none">
      <Search redirectOnFocus={true} />
      <Suspense key={query + currentPage} fallback={'LOADING...'}>
        <SearchList query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
