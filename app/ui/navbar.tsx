'use client';

import {
  HeartIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { routes } from '../lib/route-list';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  useSession,
  useAuth,
} from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
  const { session } = useSession();
  const { user } = useUser();
  const { isSignedIn, userId } = useAuth();
  const pathname = usePathname();

  const navlinks = [
    {
      name: 'Home',
      href: routes.home,
      icon: HomeIcon,
    },

    { name: 'Browse', href: routes.search, icon: MagnifyingGlassCircleIcon },
    {
      name: 'Favorites',
      href: routes.favorites,
      icon: HeartIcon,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-slate-200 dark:bg-slate-700 dark:border-slate-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {navlinks.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'inline-flex gap-2 items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group  py-2 text-slate-500 dark:text-slate-400 ',
                { 'border-t-2 border-t-blue-600': pathname === link.href },
              )}
            >
              <LinkIcon
                className={clsx('aria-hidden size-5 ', {
                  ' text-blue-600': pathname === link.href,
                })}
              />
            </Link>
          );
        })}
        <SignedOut>
          <Link
            href={'/sign-in'}
            className="inline-flex flex-col gap-2 items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group  py-2"
          >
            <SignInButton>
              <UserCircleIcon className="aria-hidden size-5" />
            </SignInButton>
          </Link>
        </SignedOut>
        <SignedIn>
          <div className="inline-flex flex-col gap-2 items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group  py-2">
            <UserButton afterSignOutUrl={'/'} />
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
