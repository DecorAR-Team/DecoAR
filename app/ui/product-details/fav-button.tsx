'use client';

import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function FavButton() {
  const [isFav, setIsFav] = useState(false);

  const handleClick = () => {
    //TODO db call to add/remove from favs
    setIsFav(!isFav);
  };

  return (
    <button
      className="transition-all delay-50 hover:text-blue-600"
      onClick={handleClick}
    >
      {isFav ? (
        <SolidHeartIcon className="w-12 h-12 text-blue-600" />
      ) : (
        <HeartIcon className="w-12 h-12" />
      )}
    </button>
  );
}
