'use client';
import { useState, useEffect } from 'react';
import CategoryTilesRow from './categoryTilesRow';
import Link from 'next/link';
import { Product } from '@prisma/client';
import { routes } from '@/app/lib/route-list';

//TODO: Fix typescript error
export default function SortBy({ products }: { products: any }) {
  //TODO fix any
  const [sortOrder, setSortOrder] = useState('featured');
  const [sortedProducts, setSortedProducts] = useState(products);

  useEffect(() => {
    let sorted = [...products];
    if (sortOrder === 'lowest') {
      sorted.sort(
        (a, b) => a.price.currentPrice * 100 - b.price.currentPrice * 100,
      );
    } else if (sortOrder === 'highest') {
      sorted.sort(
        (a, b) => b.price.currentPrice * 100 - a.price.currentPrice * 100,
      );
    } else if (sortOrder === 'alphabetical') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    setSortedProducts(sorted);
  }, [sortOrder, products]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col items-end mt-2 sm:mt-6 px-4 sm:px-10">
        <p className="w-full text-right">Sort by:</p>
        <select
          className="w-full text-right sm:w-auto focus:outline-none"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="featured">Featured</option>
          <option value="lowest">Price: Low to High</option>
          <option value="highest">Price: High to Low</option>
          <option value="alphabetical">Alphabetically</option>
        </select>
      </div>

      <ul className="pb-12 px-4 sm:px-10">
        {sortedProducts?.map(
          (
            product: any, //TODO fix any
          ) => (
            <li key={product?.id} className="mb-4">
              <Link href={routes.details(product.id_)}>
                <CategoryTilesRow product={product} />
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
