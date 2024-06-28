import { fetchProduct } from '@/app/lib/data';
import ImageSlider from '@/app/ui/product-details/image-slider';
import { Product } from '@prisma/client';
import Image from 'next/image';

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  console.log(params.id);

  const product = (await fetchProduct(params.id)) as Product;
  console.log(product.variants);

  //TODO change to image gallery instead of slider
  return (
    <div className="flex flex-row overflow-scroll">
      {product.variants.length ? (
        product.variants.map((variant) => {
          return <ImageSlider product={variant} />;
        })
      ) : (
        <ImageSlider product={product} />
      )}
    </div>
  );
}
