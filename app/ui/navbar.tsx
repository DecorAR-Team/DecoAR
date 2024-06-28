import {
  HeartIcon,
  HomeIcon,
  UserCircleIcon,
  WalletIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-slate-200 dark:bg-slate-700 dark:border-slate-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link
          href={`/`}
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group"
        >
          <HomeIcon className="aria-hidden mb-2 size-5 text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500" />
          <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500">
            Home
          </span>
        </Link>
        <Link
          href={`/profile/wallet`} //TODO check routes
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group"
        >
          <WalletIcon className="aria-hidden mb-2 size-5 text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500" />
          <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500">
            Wallet
          </span>
        </Link>
        <Link
          href={`/profile/favorites`} //TODO check routes
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group"
        >
          <HeartIcon className="aria-hidden	mb-2 size-5 text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500" />
          <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500">
            Favorites
          </span>
        </Link>
        <Link
          href={`/profile`} //TODO check routes
          className="inline-flex flex-col items-center justify-center px-5 hover:bg-slate-50 dark:hover:bg-slate-800 group"
        >
          <UserCircleIcon className="aria-hidden mb-2 size-5 text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500" />
          <span className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-500">
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
}
