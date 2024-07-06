'use client';

import { Category, Subcategory } from '@prisma/client';
import { useState } from 'react';
import Subcategories from './subcategories';
import clsx from 'clsx';

export default function CategoriesTabs({
  categories,
  subcategories,
}: {
  categories: Category[];
  subcategories: Subcategory[];
}) {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const [tabSubcategories, setTabSubcategories] = useState(
    subcategories.filter(
      (subcategory) => subcategory.category_id === categories[0].id,
    ),
  );

  function handleChange(event: React.MouseEvent<HTMLButtonElement>) {
    const target = event.target as HTMLButtonElement;
    setActiveTab(target.dataset.id!); 
    setTabSubcategories(
      subcategories.filter(
        (subcategory) => subcategory.category_id === target.dataset.id!,
      ),
    );
  }

  return (
    <>
      <div className="flex overflow-auto gap-4	text-slate-400 no-scrollbar">
        {categories.map((category) => (
          <button
            className={clsx(
              { 'border-slate-800': activeTab === category.id },
              'text-nowrap px-4 py-7 border-b-2 dark:border-slate-200 cursor-pointer transition-all delay-50 hover:bg-slate-50 hover:border-slate-900 dark:hover:border-slate-900 dark:text-slate-100',
            )}
            key={category.id}
            onClick={(e) => handleChange(e)}
            data-id={category.id}
          >
            {category.name}
          </button>
        ))}
      </div>
      <Subcategories tabSubcategories={tabSubcategories} />
    </>
  );
}
