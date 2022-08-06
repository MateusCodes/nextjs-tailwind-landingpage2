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
      <nav className="mx-auto bg-amber-400 p-4">
        <div className="container mx-auto flex items-center justify-between">

          <a
            href="#"
            aria-label="Homepage"
            className="z-50 cursor-pointer rounded-sm ring-neutral-900 ring-offset-4 ring-offset-amber-400 transition-opacity hover:opacity-75 focus:outline-none focus-visible:ring-4 lg:absolute lg:left-1/2 lg:top-9 lg:-translate-x-1/2"
          >
            <Image
              src="/logo.png"
              priority={true}
              alt="HomeSmart Logo"
              width={341}
              height={61}
              className="w-48 md:w-64 lg:w-72"
            />
          </a>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`${
              mobileMenu ? 'open' : ''
            } hamburger rounded-sm text-neutral-900 ring-neutral-900 ring-offset-4 ring-offset-amber-400 transition-colors hover:text-neutral-600 focus:outline-none focus-visible:ring-4 lg:hidden`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>

          <div
            role="menubar"
            className={`${
              mobileMenu ? 'flex' : 'hidden'
            } absolute right-0 left-0 top-16 z-40 flex-col items-center justify-between gap-4 bg-amber-400 p-6 text-center text-lg shadow-xl lg:static lg:flex lg:w-full lg:flex-row lg:shadow-none`}
          >
            <a
              className="rounded-sm py-1 px-6 text-neutral-900 ring-neutral-900 ring-offset-4 ring-offset-amber-400 transition-colors hover:text-neutral-600 focus:outline-none focus-visible:ring-4 dark:text-neutral-900"
              role="menuitem"
              href="#"
            >
              Home
            </a>
            <a
              className="rounded-sm py-1 px-6 text-neutral-900 ring-neutral-900 ring-offset-4 ring-offset-amber-400 transition-colors hover:text-neutral-600 focus:outline-none focus-visible:ring-4 dark:text-neutral-900 lg:mr-auto"
              role="menuitem"
              href="#"
            >
              Contact
            </a>
            <a
              className="rounded-sm py-1 px-6 text-neutral-900 ring-neutral-900 ring-offset-4 ring-offset-amber-400 transition-colors hover:text-neutral-600 focus:outline-none focus-visible:ring-4 dark:text-neutral-900"
              role="menuitem"
              href="#"
            >
              Login
            </a>
            <a
              className="rounded-md bg-teal-900 py-2 px-6
              text-white shadow-xl ring-neutral-900 ring-offset-4 ring-offset-amber-400 transition-shadow hover:shadow-none focus:outline-none focus-visible:ring-4"
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
