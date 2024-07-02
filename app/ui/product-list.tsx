import Link from 'next/link';
import { formatPrice } from '../lib/utils';
import { Product } from '@prisma/client';
import { routes } from '../lib/route-list';
import Image from 'next/image';
import FavButton from './product-details/fav-button';
import { checkFavorite } from '../lib/actions';
import { getUserInfo } from '../lib/userfunctions';

export default async function ProductList({
  products,
  isFavoriteList = false,
}: {
  products: Product[];
  isFavoriteList?: boolean;
}) {
  const user = await getUserInfo();
  const email = user?.email;

  return (
    //TODO fix mapping issue
    <div className="grid grid-cols-2  py-4 text-slate-400 gap-x-3 gap-y-5">
      {products.map(async (item) => {
        const isFavorite = email ? await checkFavorite(item.id, email) : false;
        console.log('ProductList: ', isFavorite);

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
              {isFavoriteList && (
                <FavButton
                  productId={item.id}
                  isFavorite={isFavorite}
                  user={user}
                />
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
