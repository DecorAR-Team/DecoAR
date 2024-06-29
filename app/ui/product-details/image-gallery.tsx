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
  );
}
