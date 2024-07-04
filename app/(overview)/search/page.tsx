import { getPagesCount } from '@/lib/data';
import ArrowBack from '@/components/ui/arrow-back';
import Pagination from '@/components/ui/search/pagination';
import Search from '@/components/ui/search/search';
import SearchList from '@/components/ui/search/search-list';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

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
      <ArrowBack />

      <Search redirectOnFocus={true} />.
      <Suspense key={query + currentPage} fallback={<Skeleton className="rounded-full" />}>
        <SearchList query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}