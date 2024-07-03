'use client';

import { Circles } from 'react-loader-spinner';

export default function loading() {
  return (
    <div className="flex justify-center h-lvh items-center">
      <Circles
        height="50"
        width="50"
        color="grey"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
