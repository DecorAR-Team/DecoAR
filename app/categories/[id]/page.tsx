import { fetchProduct, fetchSubcategoryWithProductIds } from '@/app/lib/data';
import Loadmore from '@/app/ui/category/loadmore';


export default async function Categories ({ params }: { params: { id: string } }) {
  
  const subCategoryWithProductIds = await fetchSubcategoryWithProductIds(params.id);
  
  const productsIds = subCategoryWithProductIds[0].products;
  for (let id of productsIds) {
    const product = await fetchProduct(id);
    console.log(product);
  }


  return (
    <div>
      <h1 className='flex flex-row justify-left align-middle ml-5 mt-10 text-3xl font-semibold'>Browse furniture</h1>
      {/* <SearchBar /> */}
      
      <Loadmore />
    </div>
  )
}