import Image from 'next/image';

type IndividualCategoryTileProps = {
  src: string;
  alt: string;
  name: string;
  price: {
    currentPrice: number;
  };
};

export default function IndividualCategoryTile({
  src,
  alt,
  name,
  price,
}: IndividualCategoryTileProps) {
  // console.log(src, alt, name, price);

  //TODO fix image container up
  return (
    <div className="flex flex-col items-center overflow-auto no-scrollbar mt-10">
      <div className="items-center">
        <Image
          src={src}
          alt={alt}
          width={335}
          height={185}
          className="border border-gray-300 rounded-md;"
        />
      </div>

      <div className="w-full ml-20">
        <div>
          <h2 className="w-full font-semibold mt-4"> {name} </h2>
        </div>

        <div>
          <h2 className="w-full text-slate-500"> ${price.currentPrice} </h2>
        </div>
      </div>
    </div>
  );
}
