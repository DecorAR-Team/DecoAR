import {
  fetchCategories,
  fetchProducts3D,
  fetchSubCategories,
} from '../lib/data';
import CategoriesTabs from '../ui/home/categories-tabs';
import Search from '../ui/search/search';
import { createOrUpdateUser, getUserInfo } from '../lib/userfunctions';
import Products3DList from '../ui/home/products3DList';
import { ModeToggle } from '@/components/ui/mode-toggler';

export default async function Home() {
  const categories = await fetchCategories();
  const subcategories = await fetchSubCategories();
  const products3Dlist = await fetchProducts3D();

  //TODO Charbel i changed it to below
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
