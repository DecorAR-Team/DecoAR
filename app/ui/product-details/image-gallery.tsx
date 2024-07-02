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
    <section className="container flex-grow mx-auto max-w-[1200px] border-b pb-5">
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
