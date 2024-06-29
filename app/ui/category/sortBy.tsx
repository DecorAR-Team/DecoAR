'use client'
import { useState, useEffect } from "react"

export default function SortBy ( { products }) {
  
  const [sortOrder, setSortOrder] = useState('featured');
  const [sortedProducts, setSortedProducts] = useState(products);
  
    
  function sortLowesttoHighest(products) {
    return products.sort((a, b) => (a.price.currentPrice) * 100 - (b.price.currentPrice) * 100);
  }
  const lowestPrice = sortLowesttoHighest(products.slice());
  // lowestPrice.forEach(product => {
  //   console.log(`LTH ${product.name} - $${product.price.currentPrice}`);
  // });

  
  function sortHighesttoLowest(products) {
    return products.sort((a, b) => (b.price.currentPrice) * 100 - (a.price.currentPrice) * 100);
  }
  const highestPrice = sortHighesttoLowest(products.slice());
  // highestPrice.forEach(product => {
  //   console.log(`HTL ${product.name} - $${product.price.currentPrice}`);
  // });


  function sortAlphabetically(products) { 
    return [...products].sort((a, b) => a.name.localeCompare(b.name)); 
  };
  const alphabetically = sortAlphabetically(products);  
  // alphabetically.forEach(product => {
  //   console.log(`Alphabetically ${product.name} - $${product.price.currentPrice}`);
  // });

  const sortMethods = {
    'lowest': sortLowesttoHighest,
    'highest': sortHighesttoLowest,
    'alphabetical': sortAlphabetically,
  };

  // useEffect

  return (
    <div className="flex flex-col align-middle justify-left mt-6 ml-10">
      <p >Sort by:</p>
      <select className="w-5">
        <option value="featured">Featured</option>
        <option value="lowest">Price: Low to High</option>
        <option value="highest">Price: Hight to Low</option>
        <option value="alphabetical">Alphabetically</option>
      </select>
    </div>
  )
}