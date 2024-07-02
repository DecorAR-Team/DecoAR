'use client';

import {
  HeartIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
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

export default function Navbar() {
  const { session } = useSession();
  // console.log(session?.user);

  const { user } = useUser();
  // console.log(user?.firstName);
  // console.log(user)

  const { isSignedIn, userId } = useAuth();
  // console.log(isSignedIn, userId);

  const navlinks = [
    {
      name: 'Home',
      href: routes.home,
      icon: HomeIcon,
    },

    { name: 'Browse', href: '/search', icon: MagnifyingGlassCircleIcon },
    {
      name: 'Favorites',
      href: routes.favorites,
      icon: HeartIcon,
    },
    // {
    //   name: user?.firstName ,
    //   href: routes.profile,
    //   icon: UserCircleIcon,
    //   bgImage: user?.imageUrl,
    // },
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
              className="inline-flex flex-col gap-2 items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group  py-2"
            >
              <LinkIcon className="aria-hidden size-5 text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500" />
            </Link>
          );
        })}
        <SignedOut>
          <SignInButton>
            <Link
              href={'/sign-in'}
              className="inline-flex flex-col gap-2 items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group  py-2"
            >
              <UserCircleIcon className="aria-hidden size-5 text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500" />
            </Link>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="inline-flex flex-col gap-2 items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group  py-2">
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
