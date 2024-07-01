'use client';

import { Product } from '@prisma/client';

export default function FavList({ product }: { product: Product }) {
  return <div>{product.name}</div>;
}
