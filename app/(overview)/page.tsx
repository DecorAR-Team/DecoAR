import { auth, currentUser } from '@clerk/nextjs/server';
import {
  fetchCategories,
  fetchProducts3D,
  fetchSubCategories,
} from '../lib/data';
import CategoriesTabs from '../ui/home/categories-tabs';
import Search from '../ui/search/search';
import ProductsList from '../ui/home/productsList';
import { createOrUpdateUser } from '../lib/userfunctions';

export default async function Home() {
  const categories = await fetchCategories();
  const subcategories = await fetchSubCategories();
  const products3Dlist = await fetchProducts3D();

  const { userId } = await auth();
  const user = await currentUser();
  
  if (userId && user) {
    
    const email = user?.emailAddresses[0].emailAddress;
    const name = user?.fullName || user?.firstName;
    const image = user?.imageUrl;


    await createOrUpdateUser(email, name, image);
  }

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
