import type { Metadata } from 'next';
import { Fanwood_Text } from 'next/font/google';
import './globals.css';

const fanwoodText = Fanwood_Text({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DecoAR app',
  description:
    'AR Decor Visualizer is a web application that leverages augmented reality (AR) technology to allow users to visualize  furniture and decor items in their own living spaces.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fanwoodText.className}>{children}</body>
    </html>
  );
}
