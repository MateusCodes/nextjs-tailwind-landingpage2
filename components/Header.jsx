import React, { useEffect, useState } from 'react';
import Image from 'next/future/image';
import useMedia from '../Hooks/useMedia';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileScreen = useMedia('(max-width: 580px)');

  useEffect(() => {
    if (!mobileScreen) {
      setMobileMenu(false);
    }
  }, [mobileScreen]);

  return (
    <header>
      <nav className="mx-auto p-4 bg-amber-400">
        <div className="container mx-auto flex items-center justify-between">
          <a
            href="#"
            aria-label="Homepage"
            className="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 cursor-pointer lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-9 z-50 hover:opacity-75 transition-opacity"
          >
            <Image
              src='/logo.png'
              priority={true}
              alt="HomeSmart Logo"
              width={341}
              height={61}
              className="w-48 md:w-64 lg:w-72"
            />
          </a>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            role="menubar"
            className={`${
              mobileMenu ? 'flex' : 'hidden'
            } flex-col gap-4 z-40 absolute right-0 left-0 top-16 bg-amber-400 shadow-xl text-center p-6 text-lg items-center lg:flex lg:flex-row lg:static lg:shadow-none justify-between lg:w-full`}
          >
            <a
              className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
              role="menuitem"
              href="#"
            >
              Home
            </a>
            <a
              className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors lg:mr-auto"
              role="menuitem"
              href="#"
            >
              Contact
            </a>
            <a
              className="py-1 px-6 dark:text-neutral-900 focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 text-neutral-900 hover:text-neutral-600 transition-colors"
              role="menuitem"
              href="#"
            >
              Login
            </a>
            <a
              className="py-2 px-6 bg-teal-900 text-white
              shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-amber-400"
              role="menuitem"
              href="#"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
