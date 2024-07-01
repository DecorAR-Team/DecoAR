import { quattrocento } from '@/app/layout';
import { routes } from '@/app/lib/route-list';
import { formatPrice } from '@/app/lib/utils';
import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

interface Product3D {
  id: string;
  productId: string;
  productName: string;
  url: string;
  product: Product;
}

export default function ProductsList({
  heading,
  productsList,
}: {
  heading: string;
  productsList: Product3D[];
}) {
  return (
    <div>
      <h2 className={`${quattrocento.className} font-bold text-xl`}>
        {heading}
      </h2>
      <div className="grid grid-cols-2  py-4 text-slate-400 gap-x-3 gap-y-5">
        {productsList.map((item) => (
          <Link
            className="hover:bg-slate-50"
            href={routes.details(item.productId)}
            key={item.productId}
          >
            <div className="relative w-full h-40 bg-slate-100">
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
            </div>
            <p className=" text-slate-800 mt-2">{item.productName}</p>
            <p className=" text-slate-600">{item.product.typeName}</p>
            <span className=" text-slate-400">
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
