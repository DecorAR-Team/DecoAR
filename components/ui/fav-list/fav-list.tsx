'use client';

import { Product } from '@prisma/client';
import IndividualCategoryTile from '../category/individualCategoryTile';

export default function FavList({ product }: { product: Product }) {

  return (
    // TODO: change the rendering if needed!! this is a test!
    <IndividualCategoryTile
      src={product?.image}
      alt={product?.name}
      name={product?.name}
      price={product?.price}
    />
  )
}
