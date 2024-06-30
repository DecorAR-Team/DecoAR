'use client';

import { Product, ProductVariants } from '@prisma/client';
import Image from 'next/image';

export default function ImageSlider({
  product,
}: {
  product: Product | ProductVariants;
}) {
  return (
    <div className=" flex-shrink-0  relative w-full h-[400px]">
      <Image
        className="rounded-lg "
        src={product.contextualImageUrl!} //TODO fix this, it can be null
        alt={product.imageAlt}
        fill
        priority
        style={{
          objectFit: 'contain',
          objectPosition: 'center',
        }}
        sizes="(max-width: 640px) 100vw, 200px" //TODO: check this
      ></Image>
    </div>
  );
}
