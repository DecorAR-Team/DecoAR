import React from 'react';
import Navbar from '../ui/navbar';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex flex-col">
      {/* TODO do we need h-dvh class on wrapper? */}
      <div className="px-6 pb-20 ">{children}</div>
      <Navbar />
    </div>
  );
}
