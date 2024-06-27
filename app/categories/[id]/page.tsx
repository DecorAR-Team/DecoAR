import Loadmore from '@/app/ui/category/loadmore';

export default async function Categories () {

  const categories = await fetchSubcategoryWithProductIds();
  console.log(categories.subcategory_id);

  
  return (
    <div>
      <h1 className='flex flex-row justify-left align-middle ml-5 mt-10 text-3xl font-semibold'>Browse furniture</h1>
      {/* <SearchBar /> */}
      
      <Loadmore />
    </div>
  )
}