import { Subcategory } from '@prisma/client';
import { fetchCategories, fetchSubCategories } from '../lib/data';
import CategoriesTabs from '../ui/home/categories-tabs';
import Trending from '../ui/home/trending';
import Search from '../ui/search';

export default async function Home() {
  const categories = await fetchCategories();
  const subcategories = await fetchSubCategories();

  function getRandomSubcategories(arr: Subcategory[], numItems = 4) {
    if (arr.length <= numItems) {
      return arr;
    }
    const randomIndexes: number[] = [];
    while (randomIndexes.length < numItems) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }

    return randomIndexes.map((index) => arr[index]);
  }

  const randomItems = getRandomSubcategories(subcategories);
  // console.log(randomItems);

  //TODO Subcategories and Trending can be combined?
  return (
    <main>
      <div className="py-6 w-full flex-none">
        <Search placeholder="Search" redirectOnFocus={true} />
      </div>
      <CategoriesTabs categories={categories} subcategories={subcategories} />
      <Trending randomItems={randomItems} />
    </main>
  );
}
