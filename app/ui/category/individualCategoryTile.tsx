import { fetchProducts, fetchSubcategoryWithProductIds } from "@/app/lib/data";
import Image from "next/image"

type IndividualCategoryTileProps = {
  src: string;
  alt: string;
  name: string;
  price: number;
}

export default async function IndividualCategoryTile ( {src, alt, name, price}: IndividualCategoryTileProps ) {

//retrieve params from the URL

//replace the retrieved param from the URL with the hardcoded value
const categories = await fetchSubcategoryWithProductIds();
const category = categories.filter((category) => {
  return category.subcategory_id === '667aac74547fb73491fc8d0a';
});

//retrieve the product ids from the category
const productIds = category.map((ids) => ids.products);

// check on Product database to see if ids match, if yes, return the product
const products = await fetchProducts();
const product = products.filter((product) => {


  return (
<div>
    <div>
      <Image src={src} alt={alt}/>
    </div>

    <div>
      <h2> name={name} </h2>
    </div>

    <div>
      <h2> price={price} </h2>
    </div>
 </div>
  )
}