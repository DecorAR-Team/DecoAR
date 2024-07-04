import { routes } from '@/lib/route-list';
import { Subcategory } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function Subcategories({
  tabSubcategories,
}: {
  tabSubcategories: Subcategory[];
}) {
  return (
    <div className="py-8 flex gap-4 overflow-auto	text-slate-400 no-scrollbar dark:text-slate-100">
      {tabSubcategories.map((subcategory) => (
        <Link
          href={routes.subCategoryProducts(subcategory.subcategory_ikea_id)}
          className="hover:bg-slate-50 "
          key={subcategory.id}
        >
          <div className=" flex-shrink-0  relative w-[200px] h-[80px]">
          <Suspense fallback={<Skeleton className="w-[200px] h-[80px] rounded-lg" />}>
            <Image
              className="rounded-lg"
              src={subcategory.imageUrl}
              alt={subcategory.name}
              fill
              priority
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              sizes="(max-width: 640px) 100vw, 200px" //TODO: check this
            ></Image>
            </Suspense>
          </div>
          <p className="py-3 text-slate-800 dark:text-slate-100">{subcategory.name}</p>
        </Link>
      ))}
    </div>
  );
}
