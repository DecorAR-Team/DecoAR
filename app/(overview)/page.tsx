import { auth, currentUser } from '@clerk/nextjs/server';
import {
  fetchCategories,
  fetchProducts3D,
  fetchSubCategories,
} from '../lib/data';
import CategoriesTabs from '../ui/home/categories-tabs';
import Search from '../ui/search/search';
import { createOrUpdateUser, getUserInfo } from '../lib/userfunctions';
import Products3DList from '../ui/home/products3DList';

export default async function Home() {
  const categories = await fetchCategories();
  const subcategories = await fetchSubCategories();
  const products3Dlist = await fetchProducts3D();

  // const { userId } = await auth();
  // const user = await currentUser();

  // if (userId && user) {
  //   const email = user?.emailAddresses[0].emailAddress;
  //   const name = (user?.fullName || user?.firstName) ?? '';
  //   const image = user?.imageUrl;

  //   await createOrUpdateUser(email, name, image, userId);
  // }

  const user = await getUserInfo();

  if (user) {
    await createOrUpdateUser(user.email, user.name, user.image, user.clerkId);
  }

  return (
    <main>
      <div className="py-6 w-full flex-none">
        <Search placeholder="Search" redirectOnFocus={true} />
      </div>
      <CategoriesTabs categories={categories} subcategories={subcategories} />
      <Products3DList
        heading={'Explore items with 3D view'}
        productsList={products3Dlist}
      />
    </main>
  );
}
