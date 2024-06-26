import { fetchCategories, fetchSubCategories } from '../lib/data';
import CategoriesTabs from '../ui/home/categories-tabs';

export default async function Home() {
  //TODO create an (overview) with root page, /[catID]/products and a common layout for these 2 pages: <SearchBar>,<NavBar>
  const categories = await fetchCategories();

  return (
    <main>
      <CategoriesTabs categories={categories} />
    </main>
  );
}
