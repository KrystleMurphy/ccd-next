"use client";

import { use } from 'react';
import Image from "next/image";
import logo from "@/src/assets/images/logo.png";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import SearchBar from "./search-docs/SearchBar";
import Link from 'next/link';
import FooterData from '../../pages/api/FooterData'

const navigation = {
  siteMap: [
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ccdiagnostics/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/cc-diagnostics",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M20.3292112,2 C21.2519624,2 22,2.74752185 22,3.67078882 L22,20.3292112 C22,21.2519624 21.2524781,22 20.3292112,22 L3.67078882,22 C2.74803764,22 2,21.2524781 2,20.3292112 L2,3.67078882 C2,2.74803764 2.74752185,2 3.67078882,2 L20.3292112,2 Z M15.51875,9.5 C14.0993287,9.5 13.128125,10.127356 12.6956992,10.8562567 L12.625,10.9858333 L12.625,9.625 L9.91666667,9.625 L9.91666667,19.2083333 L12.8333333,19.2083333 L12.8333333,14.56625 C12.8333333,13.0104167 13.40625,12.0208333 14.7833333,12.0208333 C15.7330797,12.0208333 16.1315784,12.8606664 16.1644352,14.3580086 L16.1666667,14.56625 L16.1666667,19.2083333 L19.0833333,19.2083333 L19.0833333,13.9154167 C19.0833333,11.0575 18.3995833,9.5 15.51875,9.5 Z M7.83333333,9.5 L4.91666667,9.5 L4.91666667,19.0833333 L7.83333333,19.0833333 L7.83333333,9.5 Z M6.375,4.5 C5.33958333,4.5 4.5,5.33958333 4.5,6.375 C4.5,7.41041667 5.33958333,8.25 6.375,8.25 C7.41041667,8.25 8.25,7.41041667 8.25,6.375 C8.25,5.33958333 7.41041667,4.5 6.375,4.5 Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const methodIcons = {
  Phone: <PhoneIcon className="h-5 w-5 text-ccDarkBlue" aria-hidden="true" />,
  Email: <EnvelopeIcon className="h-5 w-5 text-ccDarkBlue" aria-hidden="true" />,
  Address: <MapPinIcon className="h-5 w-5 text-ccDarkBlue" aria-hidden="true" />,
};

const ContactInfo = (contact) => {
  const { Method, info } = contact.fields;

  return (
    <ul role="list" className="mt-6 space-y-4">
      <li key={contact.id} className="flex items-center space-x-2">
        <span className="flex items-center justify-center">{methodIcons[Method]}</span>
        <p className="text-sm leading-6 text-gray-600">{info}</p>
      </li>
    </ul>
  );
};

const Policy = (policy) => {
  return (
    <Link 
      href={policy.fields.Document[0].url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-sm leading-6 text-gray-600 hover:text-ccLightBlue"
    >
      {policy.fields.Policy}
    </Link>
  );
};

export default function Footer() {
  const { contactDetails, policies } = use(FooterData({ revalidate: 604800 })); // Fetch data from Server Component
  return (
    <footer aria-labelledby="footer-heading" className="bg-ccAliceBlue">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and social links */}
          <div className="space-y-2">
            <Image
              alt="CC Diagnostics Logo"
              src={logo}
              width={100}
              height={28}
            />
            <p className="text-sm text-left leading-6 text-ccDarkBlue font-bold">
              Revolutionising cancer diagnostics
            </p>
            <div className="flex space-x-6 align-center justify-center">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ccDarkBlue hover:text-ccLightBlue align-center justify-center space-y-6"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          {/* Site map, policies, and contact sections */}
          <div className="mt-16 grid grid-cols-4 gap-8 xl:col-span-2 xl:mt-0">
            <div className="mt-10 md:mt-0 px-6">
              <h3 className="text-sm font-semibold leading-6 text-ccDarkBlue">Site Map</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.siteMap.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-ccLightBlue">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0 px-6">
              <h3 className="text-sm font-semibold leading-6 text-ccDarkBlue">Policies</h3>
              {policies.map(Policy)}
            </div>
            <div className="mt-10 md:mt-0 px-6 col-span-2">
              <h3 className="text-sm font-semibold leading-6 text-ccDarkBlue">Contact</h3>
              {contactDetails.map(ContactInfo)}
            </div>
          </div>
        </div>
        {/* Documentation Search */}
        <p className="mt-6 text-sm text-left leading-6 text-gray-600">Documentation Search</p>
        <div className="mt-4 max-w-xs">
          <SearchBar />
        </div>
        {/* Footer bottom */}
        <div className="mt-16 border-t border-ccLightBlue/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2024 CC Diagnostics</p>
        </div>
      </div>
    </footer>
  );
}