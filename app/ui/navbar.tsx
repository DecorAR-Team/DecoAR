'use client';

import {
  HeartIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  useSession,
  useAuth
} from '@clerk/nextjs'


export default function Navbar() {
  const { session } = useSession();
  console.log(session?.user)

  const {user } = useUser();
  console.log(user?.firstName)
  // console.log(user)

  
  const { isSignedIn, userId } = useAuth();
console.log(isSignedIn, userId)


  const navlinks = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
    },
    {
      name: 'Wallet',
      href: '/profile/wallet',
      icon: WalletIcon,
    },
    { name: 'Browse', href: '/search', icon: MagnifyingGlassCircleIcon },
    {
      name: 'Favorites',
      href: '/profile/favorites',
      icon: HeartIcon,
    },
    // {
    //   name: user ? user.name : 'Profile',
    //   href:  '/profile',
    //   icon: UserCircleIcon,
    //   bgImage: user ? user.image : '',
    // },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-slate-200 dark:bg-slate-700 dark:border-slate-600">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        {navlinks.map((link) => {
          const LinkIcon = link.icon;
          return (
              <Link
                key={link.name}
                href={link.href}
                className="inline-flex flex-col gap-2 items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group  py-2"
              >
                <LinkIcon className="aria-hidden size-5 text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500" />
                <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500]">
                  {link.name}
                </span>
              </Link>
          );
        })}
        <SignedOut>
          <SignInButton />  
        </SignedOut>
        <SignedIn >
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
