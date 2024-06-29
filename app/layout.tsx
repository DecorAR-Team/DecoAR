import type { Metadata } from 'next';
import { Fanwood_Text, Quattrocento } from 'next/font/google';
import './globals.css';

const fanwoodText = Fanwood_Text({ weight: '400', subsets: ['latin'] });
export const quattrocento = Quattrocento({ weight: '700', subsets: ['latin'] });

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
    <html suppressHydrationWarning lang="en">
      {/* suppressHydrationWarning: Fix hydration warning caused by some chrome extensions, only affects body, not children */}
      <body className={`${fanwoodText.className} md:max-w-lg md:mx-auto`}>
        {children}
      </body>
    </html>
  );
}

//TODO create dark mode https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
