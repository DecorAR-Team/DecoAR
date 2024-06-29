'use client';
import { Product, ProductVariants } from '@prisma/client';
import ReactImageGallery from 'react-image-gallery';

export default function ImageGalleryComponent({
  product,
  images,
}: {
  product: Product | ProductVariants;
  images: any[];
}) {
  return (
    //TODO add alt to images
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      <div className="container mx-auto">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={images}
        />
      </div>
    </section>
    // <div className=" flex-shrink-0  relative w-full h-[400px]">
    //   <Image
    //     className="rounded-lg "
    //     src={product.contextualImageUrl || product.image} //TODO fix this, it can be null
    //     alt={product.imageAlt}
    //     fill
    //     priority
    //     style={{
    //       objectFit: 'cover',
    //       objectPosition: 'top',
    //     }}
    //     sizes="(max-width: 640px) 100vw, 200px" //TODO: check this
    //   ></Image>
    // </div>
  );
}
