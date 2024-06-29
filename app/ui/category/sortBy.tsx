'use client'
import { useState, useEffect } from "react"

export default function SortBy ( { products }) {
  
  const [sortOrder, setSortOrder] = useState('featured');
  const [sortedProducts, setSortedProducts] = useState(products);
  
    

  const sortLowesttoHighest = (products) => {
    return products.sort((a, b) => (a.price.currentPrice - b.price.currentPrice));
  }

  console.log("hello", sortLowesttoHighest);

  const sortHighesttoLowest = (products) => {
    return [...products].sort((a, b) => b.price - a.price);
  }

  const sortAlphabetically = (products) => {
    return [...products].sort((a, b) => b.name - a.name);
  }

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