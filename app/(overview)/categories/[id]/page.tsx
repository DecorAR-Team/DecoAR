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
  // console.log(products);

  return (
    <div>
      <div className="flex flex-row items-center justify-left w-full ml-4 mt-5">
        <Link href="/">
          <IoMdArrowBack className="text-2xl" />
        </Link>
        <h1 className="flex flex-row justify-left align-middle ml-5 text-3xl font-semibold w-auto">
          Browse furniture
        </h1>
        <SortBy products={products}/>
      </div>

      <ul className="pb-12">
        {products?.map((product) => (
          <li key={product?.id}>
            <CategoryTilesRow product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}
