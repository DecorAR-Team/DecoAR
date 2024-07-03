import { fetchProduct, fetchSubcategoryWithProductIds } from '@/lib/data';
import { IoMdArrowBack } from 'react-icons/io';
import Link from 'next/link';
import SortBy from '@/components/ui/category/sortBy';
import ArrowBack from '@/components/ui/arrow-back';

export default async function Categories({
  params,
}: {
  params: { id: string };
}) {
  async function categoryDetails() {
    'use server';
    const subCategoryWithProductIds = await fetchSubcategoryWithProductIds(
      params.id,
    );
    const subcategoryName = subCategoryWithProductIds[0].subcategory.name;
    const productsIds = subCategoryWithProductIds[0].products;
    const products = [];
    for (let id of productsIds) {
      const product = await fetchProduct(id);
      products.push(product);
    }
    return { products, subcategoryName };
  }

  const { products, subcategoryName } = await categoryDetails();

  return (
    <div className="p-2">
      <div className="flex flex-col">
        <ArrowBack />
        <div className="flex items-center mt-5">
          <h1 className="ml-3 text-3xl font-semibold sm:ml-5 sm:text-4xl">
            Browse: {subcategoryName}
          </h1>
        </div>
        <SortBy products={products} />
      </div>
    </div>
  );
}
