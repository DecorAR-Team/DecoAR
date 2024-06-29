'use client';

import { getRandomNumber } from '@/app/lib/utils';
import { Rate } from 'antd';

export default function RatingComponent() {
  const rate1 = getRandomNumber(5);

  return (
    <Rate
      count={5}
      defaultValue={4}
      style={{
        padding: '2px',
        color: 'gold',
        fontSize: 25,
      }}
    />
  );
}
