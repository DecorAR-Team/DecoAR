import Navbar from '@/components/ui/navbar';
import React from 'react';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:max-w-xl md:mx-auto">
      <div className="px-6 pb-20 pt-5">{children}</div>
      <Navbar />
    </div>
  );
}
