'use client';

import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from 'react-icons/io';

export default function ArrowBack(font: any) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`${font.className} flex items-center align-middle space-x-2 pb-4 text-slate-800 dark:text-slate-300`}
    >
      <IoMdArrowBack className="w-6 h-6" />
      <span>Back</span>
    </button>
  );
}
