import React from 'react';
import Search from '../ui/search';
import Navbar from '../ui/navbar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log(searchParams);

  return (
    <div className="flex h-screen flex-col">
      <div className="px-6 py-6 w-full flex-none md:w-64 md:mx-auto">
        <Search placeholder="Search" />
      </div>
      <div className="px-6 flex-grow md:overflow-y-auto md:p-12">
        {children}
      </div>
      <div className="w-full flex-none md:w-64">
        <Navbar />
      </div>
    </div>
  );
}
