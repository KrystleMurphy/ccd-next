// components/Footer.jsx
import React from "react";
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import SearchBar from "../../SearchDocs/SearchBar";

const navigation = {
  siteMap: [
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    // Social icons as before
  ],
};

const methodIcons = {
  Phone: <PhoneIcon className="h-5 w-5 text-ccDarkBlue" aria-hidden="true" />,
  Email: <EnvelopeIcon className="h-5 w-5 text-ccDarkBlue" aria-hidden="true" />,
  Address: <MapPinIcon className="h-5 w-5 text-ccDarkBlue" aria-hidden="true" />,
};

const ContactInfo = ({ contact }) => {
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

const Policy = ({ policy }) => (
  <ul role="list" className="mt-6 space-y-4">
    <li key={policy.id}>
      <a href={policy.fields.Document[0].url} target="_blank" rel="noopener noreferrer">
        <p className="text-sm leading-6 text-gray-600">{policy.fields.Policy}</p>
      </a>
    </li>
  </ul>
);

export default function Footer({ policies, contacts }) {
  return (
    <footer aria-labelledby="footer-heading" className="bg-ccAliceBlue">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Logo and social links */}
          <div className="space-y-2">
            <Image
              alt="CC Diagnostics Logo"
              src="/images/logo.png"
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
                    <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-ccLightBlue">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 md:mt-0 px-6">
              <h3 className="text-sm font-semibold leading-6 text-ccDarkBlue">Policies</h3>
              {policies.map((policy) => (
                <Policy key={policy.id} policy={policy} />
              ))}
            </div>
            <div className="mt-10 md:mt-0 px-6 col-span-2">
              <h3 className="text-sm font-semibold leading-6 text-ccDarkBlue">Contact</h3>
              {contacts.map((contact) => (
                <ContactInfo key={contact.id} contact={contact} />
              ))}
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
