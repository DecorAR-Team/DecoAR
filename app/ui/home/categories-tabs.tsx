'use client';

import { Category } from '@prisma/client';
import { useEffect, useState } from 'react';
import Subcategories from './subcategories';
import { getSubcategories } from '@/app/lib/actions';
import clsx from 'clsx';

export default function CategoriesTabs({
  categories,
}: {
  categories: Category[];
}) {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  // const [subcategories, setSubcategories] = useState<
  //   {
  //     id: string;
  //     category_id: string;
  //     imageUrl: string | null;
  //     name: string;
  //     subcategory_ikea_id: string;
  //   }[]
  // >([]);

  useEffect(() => {
    console.log('CategoriesTabs component mounted.', activeTab);

    return () => {
      console.log('CategoriesTabs component unmounted.');
    };
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const firstTabSubcategories = await getSubcategories(categories[0].id);
  //     console.log(firstTabSubcategories);
  //     setSubcategories(firstTabSubcategories);
  //   };
  //   fetchData();
  // }, []);

  async function handleChange(
    event: React.MouseEvent<HTMLButtonElement>,
    // categoryId: string,
  ) {
    const target = event.target as HTMLButtonElement;
    setActiveTab(target.dataset.id!); //fix this
    // const fetchedSubcategories = await getSubcategories(categoryId);
    // setSubcategories(fetchedSubcategories);
  }

  return (
    <>
      <div className="flex overflow-auto gap-4	text-slate-400 no-scrollbar">
        {categories.map((category) => (
          <button
            className={clsx(
              { 'border-black': activeTab === category.id },
              'text-nowrap p-4 border-b-2 cursor-pointer transition-all delay-50 hover:bg-slate-50 hover:border-black',
            )}
            key={category.id}
            onClick={(e) => handleChange(e)}
            data-id={category.id}
          >
            {category.name}
          </button>
        ))}
      </div>
      <Subcategories activeTab={activeTab} />
    </>
  );
}
