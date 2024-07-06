'use client';
import ReactImageGallery from 'react-image-gallery';

export default function ImageGalleryComponent({
  images,
}: {
  images: {
    original: string;
    thumbnail: string;
  }[];
}) {
  return (

    <section className=" flex-grow mx-auto max-w-[1200px] border-b pb-5">
      <div className=" mx-auto">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={images}
        />
      </div>
    </section>
  );
}
