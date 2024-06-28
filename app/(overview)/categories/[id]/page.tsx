import { fetchProduct, fetchSubcategoryWithProductIds } from '@/app/lib/data';
import CategoryTilesRow from '@/app/ui/category/categoryTilesRow';
import Search from '@/app/ui/search';

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
    const productsIds = subCategoryWithProductIds[0].products;
    const products = [];
    for (let id of productsIds) {
      const product = await fetchProduct(id);
      products.push(product);
    }
    return products;
  }

  const products = await categoryDetails();

  console.log(products);

  return (
    <div>
      <h1 className="flex flex-row justify-left align-middle ml-5 text-3xl font-semibold">
        Browse furniture
      </h1>
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
