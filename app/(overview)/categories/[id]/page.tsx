import { fetchProduct, fetchSubcategoryWithProductIds } from '@/app/lib/data';
import CategoryTilesRow from '@/app/ui/category/categoryTilesRow';
import Search from '@/app/ui/search';
import { IoMdArrowBack } from 'react-icons/io';
import Link from 'next/link';
import SortBy from '@/app/ui/category/sortBy';

export default async function Categories({ params }: { params: { id: string } }) {
  async function categoryDetails() {
    'use server';
    const subCategoryWithProductIds = await fetchSubcategoryWithProductIds(params.id);
    const productsIds = subCategoryWithProductIds[0].products;
    const products = [];
    for (let id of productsIds) {
      const product = await fetchProduct(id);
      products.push(product);
    }
    return products;
  }

  const products = await categoryDetails();

  return (
    <div>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-left align-middle mt-10'>
        <Link href="/">
          <IoMdArrowBack className="text-3xl" />
        </Link>
        <h1 className="ml-5 text-3xl font-semibold">
          Browse furniture
        </h1>
        </div >
        <SortBy products={products}/>
      </div>
    </div>
  );
}
