import Image from 'next/image';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

type IndividualCategoryTileProps = {
  src: string;
  alt: string;
  name: string;
  price: {
    currentPrice: number;
  };
};

export default function IndividualCategoryTile({
  src,
  alt,
  name,
  price,
}: IndividualCategoryTileProps) {

  return (
    <div className="flex flex-col items-center overflow-auto no-scrollbar mt-5">
      <div className="relative ">
      <Suspense fallback={<Skeleton className="w-[335px] h-[185px] rounded-lg" />}>
        <Image
          src={src}
          alt={alt}
          width={335}
          height={185}
          className="border border-gray-300 rounded-md rounded-xl;"
        />
        </Suspense>
      </div>

      <div className="w-full pl-2">
        <div>
          <h2 className="w-full font-semibold mt-2"> {name} </h2>
        </div>

        <div>
          <h2 className="w-full text-slate-500 mb-6 ">
            {' '}
            ${price.currentPrice}{' '}
          </h2>
        </div>
      </div>
    </div>
  );
}
