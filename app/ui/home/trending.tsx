import { quattrocento } from '@/app/layout';
import { Subcategory } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export default function Trending({
  randomItems,
}: {
  randomItems: Subcategory[];
}) {
  return (
    <div className="pb-16">
      <h2 className={`${quattrocento.className} font-bold text-xl`}>
        Trending now
      </h2>
      <div className="grid grid-cols-2  py-4 text-slate-400 gap-3">
        {randomItems.map((subcategory) => (
          <Link
            className="hover:bg-slate-50 "
            href={`/categories/${subcategory.id}`}
            key={subcategory.id}
          >
            <div className=" relative w-full h-40 bg-slate-100">
              <Image
                className="rounded-lg "
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
            </div>
            <p className="py-3 text-slate-800">{subcategory.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
