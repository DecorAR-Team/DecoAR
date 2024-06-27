import Image from "next/image"

type IndividualCategoryTileProps = {
  src: string;
  alt: string;
  name: string;
  price: number;
}

export default function IndividualCategoryTile ( {src, alt, name, price}: IndividualCategoryTileProps ) {

console.log(src, alt, name, price);

  return (
<div>
    <div>
      <Image src={src} alt={alt} width={50} height={50}/>
    </div>

    <div>
      <h2> name={name} </h2>
    </div>

    <div>
      <h2> price={price.currentPrice} </h2>
    </div>
 </div>
  )
}