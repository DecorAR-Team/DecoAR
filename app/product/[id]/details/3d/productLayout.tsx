import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="">{children}</body>
    </html>
  );
}
