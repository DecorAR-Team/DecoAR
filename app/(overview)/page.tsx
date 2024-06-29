import {
  fetchCategories,
  fetchProducts3D,
  fetchSubCategories,
} from '../lib/data';
import CategoriesTabs from '../ui/home/categories-tabs';
import Search from '../ui/search';
import Products3D from '../ui/home/products3D';

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
      <Products3D products3Dlist={products3Dlist} />
    </main>
  );
}
