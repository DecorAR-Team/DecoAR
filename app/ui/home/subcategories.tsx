import { getSubcategories } from '@/app/lib/actions';
import { useEffect, useState } from 'react';

export default function Subcategories({ activeTab }: { activeTab: string }) {
  //   console.log(activeTab);
  const [subcategories, setSubcategories] = useState<
    {
      id: string;
      category_id: string;
      imageUrl: string;
      name: string;
      subcategory_ikea_id: string;
    }[]
  >([]);
  //TODO update Subcategories db json, take from mongodb
  useEffect(() => {
    console.log('Subcategories component mounted.', subcategories);

    return () => {
      console.log('Subcategories component unmounted.');
    };
  });

  useEffect(() => {
    const fetchData = async () => {
      const newsubcategories = await getSubcategories(activeTab);
      //   console.log(newsubcategories);
      setSubcategories(newsubcategories);
    };
    fetchData();
  }, [activeTab]);

  return;
  // <div className="flex overflow-auto gap-4	text-slate-400 no-scrollbar">
  //   {subcategories.map((category) => (
  //     <button
  //       className={clsx(
  //         { 'border-black': activeTab === category.id },
  //         'text-nowrap p-4 border-b-2 cursor-pointer transition-all delay-50 hover:bg-slate-50 hover:border-black',
  //       )}
  //       key={subcategories.id}
  //       onClick={(e) => handleChange(e)}
  //       data-id={category.id}
  //     >
  //       {category.name}
  //     </button>
  //   ))}
  // </div>
}
