import {
  fetchCategories,
  fetchProducts3D,
  fetchSubCategories,
} from '../lib/data';
import CategoriesTabs from '../ui/home/categories-tabs';
import Search from '../ui/search/search';
import ProductsList from '../ui/home/productsList';

export default async function Home() {
  const categories = await fetchCategories();
  const subcategories = await fetchSubCategories();
  const products3Dlist = await fetchProducts3D();

  return (
    <main>
      <div className="py-6 w-full flex-none">
        <Search placeholder="Search" redirectOnFocus={true} />
      </div>
      <CategoriesTabs categories={categories} subcategories={subcategories} />
      <ProductsList heading={'View in 3D'} productsList={products3Dlist} />
    </main>
  );
}
