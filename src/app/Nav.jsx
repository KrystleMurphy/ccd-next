"use client"; // This component will need client-side state and effects

import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/src/assets/images/logo.png";
import ContactHeavy from '@/src/components/contact-buttons/ContactHeavy';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Effect to close the menu when switching to larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dropdown menu component
  const dropdown = () => {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center">
          <Link href="/products" className="text-sm font-semibold leading-6 text-ccDarkBlue" onClick={closeMenu}>
            Products
          </Link>

          <MenuButton className="inline-flex items-center ml-2 text-sm font-semibold text-gray-900 bg-white rounded-md ring-gray-300 hover:bg-gray-50" aria-label="Open menu">
            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-ccLightBlue" />
          </MenuButton>
        </div>

        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ active }) => (
                <Link
                  href="/products"
                  className={`block px-4 py-2 text-sm ${active ? 'text-ccLightBlue' : 'text-gray-700'}`}
                  onClick={closeMenu}
                >
                  Methica CC
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <Link
                  href="/products#searchCTA"
                  className={`block px-4 py-2 text-sm ${active ? 'text-ccLightBlue' : 'text-gray-700'}`}
                  onClick={closeMenu}
                >
                  Product Documentation
                </Link>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <Link
                  href="/products#pipeline"
                  className={`block px-4 py-2 text-sm ${active ? 'text-ccLightBlue' : 'text-gray-700'}`}
                  onClick={closeMenu}
                >
                  Future Products
                </Link>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-lg">
      <nav className="flex items-center justify-between p-6 lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" onClick={closeMenu}>
            <span className="sr-only">CC Diagnostics</span>
            <Image
              src={logo}
              alt="CC Diagnostics logo"
              className="h-8 w-auto"
              priority // Prioritize loading this image
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:ml-auto lg:gap-x-12 items-center ">
          <Link href="/" className="text-sm font-semibold leading-6 text-ccDarkBlue" onClick={closeMenu}>
            Home
          </Link>

          {dropdown()}

          <Link href="/about" className="text-sm font-semibold leading-6 text-ccDarkBlue" onClick={closeMenu}>
            About
          </Link>
          <Link href="/news" className="text-sm font-semibold leading-6 text-ccDarkBlue" onClick={closeMenu}>
            News
          </Link>
          <ContactHeavy onClick={closeMenu} />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white px-6 py-6 sm:ring-1 sm:ring-ccAliceBlue/10 lg:hidden">
          <div className="flex items-center justify-between ">
            <Link href="/" onClick={closeMenu}>
              <Image className="h-8 w-auto" src={logo} alt="CC Diagnostics Logo" />
            </Link>
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={toggleMenu}>
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="absolute left-0 right-0 w-full space-y-2 py-6 text-center bg-white">
                <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-ccDarkBlue hover:bg-gray-50" onClick={closeMenu}>
                  Home
                </Link>

                {dropdown()}

                <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-ccDarkBlue hover:bg-gray-50" onClick={closeMenu}>
                  About
                </Link>
                <Link href="/news" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-ccDarkBlue hover:bg-gray-50" onClick={closeMenu}>
                  News
                </Link>
                <div className="py-6">
                  <Link
                    href="/contact"
                    className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ccLightBlue hover:text-ccDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
                    onClick={closeMenu}>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
