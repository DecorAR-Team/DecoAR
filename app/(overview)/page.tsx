import { Subcategory } from '@prisma/client';
import { fetchCategories, fetchSubCategories } from '../lib/data';
import CategoriesTabs from '../ui/home/categories-tabs';
import Trending from '../ui/home/trending';

export default async function Home() {
  //TODO create an (overview) with root page, /[catID]/products and a common layout for these 2 pages: <SearchBar>,<NavBar>
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
      <CategoriesTabs categories={categories} subcategories={subcategories} />
      <Trending randomItems={randomItems} />
    </main>
  );
}
