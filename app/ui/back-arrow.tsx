'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function BackButton(font: any) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className={`${font.className} flex items-center space-x-2 p-2 text-black hover:text-black`}
    >
      <ArrowLeftIcon className="w-6 h-6" />
    </button>
  );
}
