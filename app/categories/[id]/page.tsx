import { fetchSubcategoryWithProductIds } from '@/app/lib/data';
import Loadmore from '@/app/ui/category/loadmore';

export default async function Categories () {

  const categories = await fetchSubcategoryWithProductIds();
  
  const category = categories.filter((category) => {
    return category.subcategory_id === '667aac74547fb73491fc8d0a';
  });

  console.log(category);



  
  return (
    <div>
      <h1 className='flex flex-row justify-left align-middle ml-5 mt-10 text-3xl font-semibold'>Browse furniture</h1>
      {/* <SearchBar /> */}
      
      <Loadmore />
    </div>
  )
}