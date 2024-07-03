import Link from 'next/link';
import { formatPrice } from '../../lib/utils';
import { Product } from '@prisma/client';
import { routes } from '../../lib/route-list';
import Image from 'next/image';
import FavButton from './product-details/fav-button';
import { checkFavorite } from '../../lib/actions';
import { getUserInfo } from '../../lib/userfunctions';

export default async function ProductList({
  products,
}: {
  products: Product[];
}) {
  const user = await getUserInfo();
  const email = user?.email;

  //add isFavorite prop to each product
  const favProducts = [];
  for (let product of products) {
    const isFavorite = email ? await checkFavorite(product.id, email) : false;
    favProducts.push({
      ...product,
      isFavorite,
    });
  }

  return (
    <div className="grid grid-cols-2  py-4 text-slate-400 gap-x-3 gap-y-5">
      {favProducts.map((item) => {
        return (
          <Link
            className="hover:bg-slate-50"
            href={routes.details(item.id_)}
            key={item.id_}
          >
            <div className="relative w-full h-40 bg-slate-100">
              <Image
                className="rounded-lg "
                src={item.contextualImageUrl}
                alt={item.name}
                fill
                priority
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                sizes="(max-width: 640px) 100vw, 200px" //TODO: check this
              ></Image>
            </div>
            <div className="flex justify-between">
              <div>
                <p className=" text-slate-800 mt-2">{item.name}</p>
                <p className=" text-slate-600">{item.typeName}</p>
                <span className=" text-slate-400">
                  {formatPrice(item.price.currentPrice, item.price.currency)}
                </span>
              </div>
              <FavButton
                productId={item.id}
                isFavorite={item.isFavorite}
                user={user}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
