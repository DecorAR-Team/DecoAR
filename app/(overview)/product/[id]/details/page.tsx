import { fetchProduct, fetchUserById } from '@/app/lib/data';
import { Product } from '@prisma/client';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGalleryComponent from '@/app/ui/product-details/image-gallery';
import { getRandomNumber } from '@/app/lib/utils';
import RatingComponent from '@/app/ui/product-details/rating';
import Link from 'next/link';
import { routes } from '@/app/lib/route-list';
import FavButton from '@/app/ui/product-details/fav-button';

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const product = (await fetchProduct(params.id)) as Product;

  const images = product.variants.map((variant) => {
    return {
      original: variant.contextualImageUrl ?? product.image,
      thumbnail: variant.contextualImageUrl ?? product.image,
    };
  });

  // console.log(images);
  return (
    <section className="flex flex-col gap-6">
      <div className="">
        <ImageGalleryComponent images={images} />
        <div className="row flex justify-between items-center py-4 text-slate-300">
          <div className="rating">
            <RatingComponent />
            <span className="ml-3 text-sm text-slate-500">
              ({getRandomNumber(200)})
            </span>
          </div>
          <FavButton productId={product.id} />
        </div>
      </div>
      <div>
        <h1 className="text-xl pb-2">{product.name}</h1>
        <div className="flex flex-wrap gap-2">
          {product.categoryPath.map((subcategory) => (
            <Link
              key={subcategory.key}
              className="p-[3px] border rounded-lg border-slate-400 p text-slate-400 text-sm hover:scale-105 transition-all delay-50 hover:bg-slate-50 hover:border-slate-800"
              href={''} //TODO in SubcategoryWithProductIDs add subcategory_ikea_id
            >
              {subcategory.name}
            </Link>
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
      <Link
        href={routes.details3D(product.id_)}
        className="transition-all delay-50 bg-blue-600 hover:bg-blue-800 rounded-lg text-white p-2 w-1/2 text-center w-full"
      >
        <p>Try it in your home</p>
      </Link>
    </section>
  );
}
