import React from 'react';
import Search from '../ui/search';
import Navbar from '../ui/navbar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Search placeholder="Search" />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      <div className="w-full flex-none md:w-64">
        <Navbar />
      </div>
    </div>
  );
}
