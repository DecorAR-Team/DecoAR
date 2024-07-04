'use client';

import ArrowBack from "@/components/ui/arrow-back";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-2xl mb-6">Sorry, the page you are looking for does not exist.</p>
      <ArrowBack />
    </div>
  );
}