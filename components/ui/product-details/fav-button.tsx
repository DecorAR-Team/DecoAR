'use client';

import { revalidate, toggleFavorite } from '@/lib/actions';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '@/lib/route-list';

export default function FavButton({
  productId,
  isFavorite,
  user,
}: {
  productId: string;
  isFavorite: boolean;
  user: {
    email: string;
    name: string | null;
    image: string;
    clerkId: string;
  } | null;
}) {
  const [isFav, setIsFav] = useState(isFavorite);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!user?.email || !user?.clerkId) {
      return router.push('/sign-in');
    }
    setIsFav(!isFav);
    toggleFavorite(productId, user.email, user.clerkId);
    revalidate(routes.favorites, routes.details(productId));
  };

  return (
    <button
      className="transition-all delay-50 hover:text-blue-600"
      onClick={(e) => handleClick(e)}
    >
      {isFav ? (
        <SolidHeartIcon className="w-12 h-12 text-blue-600" />
      ) : (
        <HeartIcon className="w-12 h-12" />
      )}
    </button>
  );
}
