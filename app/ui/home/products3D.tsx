import { quattrocento } from '@/app/layout';
import { routes } from '@/app/lib/route-list';
import { formatPrice } from '@/app/lib/utils';
import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

export default function Products3D({
  products3Dlist,
}: {
  products3Dlist: {
    id: string;
    productId: string;
    productName: string;
    url: string;
    product: Product;
  }[];
}) {
  // console.log('--------', products3Dlist[0]);

  return (
    <div>
      <h2 className={`${quattrocento.className} font-bold text-xl`}>
        View in 3D
      </h2>
      <div className="grid grid-cols-2  py-4 text-slate-400 gap-x-3 gap-y-5">
        {products3Dlist.map((product3D) => (
          <Link
            className="hover:bg-slate-50"
            href={routes.details(product3D.productId)}
            key={product3D.productId}
          >
            <div className="relative w-full h-40 bg-slate-100">
              <Image
                className="rounded-lg "
                src={product3D.product.contextualImageUrl}
                alt={product3D.productName}
                fill
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                sizes="(max-width: 640px) 100vw, 200px" //TODO: check this
              ></Image>
            </div>
            <p className=" text-slate-800 mt-2">{product3D.productName}</p>
            <p className=" text-slate-600">{product3D.product.typeName}</p>
            <span className=" text-slate-400">
              {formatPrice(
                product3D.product.price.currentPrice,
                product3D.product.price.currency,
              )}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
