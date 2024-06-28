'use client';
import IndividualCategoryTile from "./individualCategoryTile";

export default function CategoryTilesRow ({ product }: { product: any }) {

  
   return (
      <IndividualCategoryTile src={product?.image} alt={product?.name} name={product?.name} price={product?.price}/>
  )
}