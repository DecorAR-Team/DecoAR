// import { getSubcategories } from '@/app/lib/actions';
// import { Category } from '@prisma/client';
// import { Dispatch, SetStateAction } from 'react';

// export default function TabForm({
//   category,
//   setActiveTab,
// }: {
//   category: Category;
//   setActiveTab: Dispatch<SetStateAction<string>>;
// }) {
//   const getSubcategoriesWithId = getSubcategories.bind(null, category.id);

//   return (
//     <form action={getSubcategoriesWithId}>
//       <button
//         className="text-nowrap p-4 border-b-2 cursor-pointer transition-all delay-50 hover:bg-slate-50 hover:border-black"
//         key={category.id}
//         onClick={() => setActiveTab}
//         data-id={category.id}
//       >
//         {category.name}
//       </button>{' '}
//     </form>
//   );
// }
