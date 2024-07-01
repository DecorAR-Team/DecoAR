import React from 'react';
import Search from '../ui/search';
import Navbar from '../ui/navbar';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log(searchParams);

  return (
    <div className="flex flex-col">
      {/* TODO do we need h-dvh class on wrapper? */}
      <div className="px-6 flex-grow ">{children}</div>
      <Navbar />
    </div>
  );
}
