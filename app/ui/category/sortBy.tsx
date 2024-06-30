'use client';
import { useState, useEffect } from 'react';
import CategoryTilesRow from './categoryTilesRow';

export default function SortBy({ products }) {
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

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col align-middle justify-left mt-2 ml-10">
        <p className='w-full text-right pr-10'>Sort by:</p>
        <select className='w-full text-right' value={sortOrder} onChange={handleSortChange}>
          <option value="featured">Featured</option>
          <option value="lowest">Price: Low to High</option>
          <option value="highest">Price: High to Low</option>
          <option value="alphabetical">Alphabetically</option>
        </select>
      </div>

      <ul className="pb-12">
        {sortedProducts?.map((product) => (
          <li key={product?.id}>
            <CategoryTilesRow product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
