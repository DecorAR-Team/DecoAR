import {
  HeartIcon,
  HomeIcon,
  UserCircleIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { getUserSession } from '../lib/session';
import Image from 'next/image';

export default async function Navbar() {
  const user = await getUserSession();
  const navlinks = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
    },
    {
      name: 'Wallet',
      href: user ? '/profile/wallet' : 'api/auth/signin',
      icon: WalletIcon,
    },
    {
      name: 'Favorites',
      href: user ? '/profile/favorites' : 'api/auth/signin',
      icon: HeartIcon,
    },
    {
      name: user ? user.name : 'Profile',
      href: user ? '/profile' : 'api/auth/signin',
      icon: UserCircleIcon,
      bgImage: user ? user.image : '',
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
              className="inline-flex flex-col gap-2 items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group  py-2"
            >
              {user && link.name === user.name ? ( //TODO: more elegant way to check if the LinkIcon is Profile and user is logged in, to show userImg?
                <Image
                  src={user.image!}
                  alt={user.name!}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              ) : (
                <LinkIcon className="aria-hidden size-5 text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500" />
              )}
              <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500]">
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
