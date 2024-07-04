'use client'

import ArrowBack from "@/components/ui/arrow-back";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-4">Looks like you&apos;re lost!</h2>
      <p className="text-2xl mb-6">The page you are looking for does not exist.</p>
      <ArrowBack />
    </div>
  );
}