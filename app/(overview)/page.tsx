import {
  fetchCategories,
  fetchProducts3D,
  fetchSubCategories,
} from '@/lib/data';
import CategoriesTabs from '@/components/ui/home/categories-tabs';
import Search from '@/components/ui/search/search';
import { createOrUpdateUser, getUserInfo } from '@/lib/userfunctions';
import Products3DList from '@/components/ui/home/products3DList';
import { ModeToggle } from '@/components/ui/mode-toggler';

export default async function Home() {
  const categories = await fetchCategories();
  const subcategories = await fetchSubCategories();
  const products3Dlist = await fetchProducts3D();

  const user = await getUserInfo();

  if (user) {
    await createOrUpdateUser(user.email, user.name, user.image, user.clerkId);
  }

  return (
    <main>
      <div className="pb-5 w-full flex gap-2">
        <Search redirectOnFocus={true} />
        <ModeToggle />
      </div>
      <CategoriesTabs categories={categories} subcategories={subcategories} />
      <Products3DList
        heading={'Explore items with 3D view'}
        productsList={products3Dlist}
      />
    </main>
  );
}
