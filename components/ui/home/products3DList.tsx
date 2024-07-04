import { routes } from '@/lib/route-list';
import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { Quattrocento } from 'next/font/google';
import { formatPrice } from '@/lib/utils';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const quattrocento = Quattrocento({ weight: '700', subsets: ['latin'] });

interface Product3D {
  id: string;
  productId: string;
  productName: string;
  url: string;
  product: Product;
}

export default function Products3DList({
  heading,
  productsList,
}: {
  heading: string;
  productsList: Product3D[];
}) {
  return (
    <div className='dark:text-slate-300'>
      <h2 className={`${quattrocento.className} font-bold text-xl dark:text-slate-300`}>
        {heading}
      </h2>
      <div className="grid grid-cols-2  py-4 text-slate-400 dark:text-slate-300 gap-x-3 gap-y-5">
        {productsList.map((item) => (
          <Link
            className="hover:bg-slate-50"
            href={routes.details(item.productId)}
            key={item.productId}
          >
            <div className="relative w-full h-40 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <Suspense fallback={<Skeleton className="w-full h-40 rounded-lg" />}>
              <Image
                className="rounded-lg "
                src={item.product.contextualImageUrl}
                alt={item.productName}
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
            <p className=" text-slate-800 dark:text-slate-300 mt-2">{item.productName}</p>
            <p className=" text-slate-600 dark:text-slate-300">{item.product.typeName}</p>
            <span className="text-slate-400 dark:text-slate-300">
              {formatPrice(
                item.product.price.currentPrice,
                item.product.price.currency,
              )}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
