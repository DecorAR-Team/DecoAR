import { fetchProduct } from '@/app/lib/data';
import { Product } from '@prisma/client';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGalleryComponent from '@/app/ui/product-details/image-gallery';
import { getRandomNumber } from '@/app/lib/utils';
import RatingComponent from '@/app/ui/product-details/rating';
import Link from 'next/link';
import { routes } from '@/app/lib/route-list';

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
      <div>
        <ImageGalleryComponent product={product} images={images} />
        <RatingComponent />
        <span className="ml-3 text-sm text-slate-400">
          ({getRandomNumber(200)})
        </span>
      </div>
      <h1 className="text-xl">{product.name}</h1>
      <p>{product.description}</p>
      <div>
        <h2>Specifications:</h2>
        <p>{product.measurement ?? 'No measurements'}</p>
      </div>
      <Link
        href={routes.details3D(product.id_)}
        className="bg-blue-600 rounded-lg text-white p-2 w-1/2 text-center ho"
      >
        <p>Try it in your home</p>
      </Link>
    </section>
  );
}
