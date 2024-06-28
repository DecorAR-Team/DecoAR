import { Subcategory } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export default function Subcategories({
  tabSubcategories,
}: {
  tabSubcategories: Subcategory[];
}) {
  return (
    <div className="py-8 flex gap-4 overflow-auto	text-slate-400 no-scrollbar">
      {tabSubcategories.map((subcategory) => (
        <Link
          href={`/categories/${subcategory.id}`}
          className="hover:bg-slate-50"
          key={subcategory.id}
        >
          <div className=" flex-shrink-0  relative w-[200px] h-[80px]">
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
          </div>
          <p className="py-3 text-slate-800">{subcategory.name}</p>
        </Link>
      ))}
    </div>
  );
}
