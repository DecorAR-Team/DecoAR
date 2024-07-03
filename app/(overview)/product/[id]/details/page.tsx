import { fetchProduct } from '@/app/lib/data';
import { Product, ProductWith3d } from '@prisma/client';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGalleryComponent from '@/app/ui/product-details/image-gallery';
import { getRandomNumber } from '@/app/lib/utils';
import RatingComponent from '@/app/ui/product-details/rating';
import Link from 'next/link';
import { routes } from '@/app/lib/route-list';
import FavButton from '@/app/ui/product-details/fav-button';
import { checkFavorite } from '@/app/lib/actions';
import { getUserInfo } from '@/app/lib/userfunctions';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import ArrowBack from '@/app/ui/arrow-back';

type ProductFull = Product & {
  productWith3d?: ProductWith3d;
};

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const user = await getUserInfo();
  const email = user?.email;

  const product = (await fetchProduct(params.id)) as ProductFull;
  const isFavorite = email ? await checkFavorite(product.id, email) : false;
  // console.log('Product: ', isFavorite, product);

  const productImages = [
    {
      original: product.contextualImageUrl,
      thumbnail: product.contextualImageUrl,
    },
    {
      original: product.image,
      thumbnail: product.image,
    },
  ];

  //start - if a product has variants, add them to the images array
  const variants = product.variants.length
    ? product.variants.map((variant) => {
        return {
          original: variant.contextualImageUrl ?? variant.image,
          thumbnail: variant.contextualImageUrl ?? variant.image,
        };
      })
    : null;

  const images = variants ? [...variants, ...productImages] : productImages;
  //end - if a product has variants, add them to the images array

  return (
    <section className="flex flex-col gap-6">
      <ArrowBack />
      {/* <Breadcrumbs /> */}
      <div className="">
        <ImageGalleryComponent images={images} />
        <div className="row flex justify-between items-center py-4 text-slate-300">
          <div className="rating">
            <RatingComponent />
            <span className="ml-3 text-sm text-slate-500">
              ({getRandomNumber(200)})
            </span>
          </div>
          <FavButton
            productId={product.id}
            isFavorite={isFavorite}
            user={user}
          />
        </div>
      </div>
      <div>
        <h1 className="text-xl pb-2">{product.name}</h1>
        <div className="flex flex-wrap gap-2">
          {product.categoryPath.map((subcategory) => (
            <button
              key={subcategory.key}
              className="p-[3px] border rounded-lg border-slate-400 p text-slate-400 text-sm hover:scale-105 transition-all delay-50 hover:bg-slate-50 hover:border-slate-800"
            >
              {subcategory.name}
            </button>
          ))}
        </div>
      </div>
      <p>{product.description}</p>

      <div>
        <h2 className="text-lg">Specifications:</h2>
        <p>
          {product.measurement.length ? product.measurement : 'No measurements'}
        </p>
      </div>

      {product.productWith3d && (
        <Link
          href={routes.details3D(product.id_)}
          className="inline-flex gap-2 items-center justify-center transition-all delay-50 bg-blue-600 hover:bg-blue-800 rounded-lg text-white p-2 text-center w-full"
        >
          <ArrowPathIcon className="aria-hidden size-5" />
          View in 3D
        </Link>
      )}
    </section>
  );
}
