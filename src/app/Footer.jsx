// src/app/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/src/assets/images/logo.png";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

// Define icons for different contact methods
const methodIcons = {
  Phone: <PhoneIcon className="h-5 w-5 text-ccDarkBlue" aria-hidden="true" />,
  Email: <EnvelopeIcon className="h-5 w-5 text-ccDarkBlue" aria-hidden="true" />,
  Address: <MapPinIcon className="h-5 w-5 text-ccDarkBlue" aria-hidden="true" />,
};

// Component to render individual contact information
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

// Component to render individual policies
const Policy = ({ policy }) => {
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

const navigationLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];


// Main Footer component
export default function Footer({ policies, contactDetails }) {
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
              // width={100}
              height={48}
            />
            <p className="py-6 text-xl text-left leading-6 text-ccDarkBlue font-bold">
              Revolutionising cancer diagnostics
            </p>
            <div className="flex space-x-6 align-center justify-center">
              {/* Social links */}
              {/* Add your social links mapping here if needed */}
            </div>
          </div>
          {/* Site map, policies, and contact sections */}
<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:col-span-2 xl:mt-0 m-12">
  {/* Site Map Section */}
  <div className="px-6">
    <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">Site Map</h3>
    <ul role="list" className="mt-4 space-y-3">
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.path} className="text-sm text-gray-600 hover:text-ccLightBlue transition-colors duration-200">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  {/* Policies Section */}
  <div className="px-6">
    <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">Policies</h3>
    <ul role="list" className="mt-4 space-y-3">
      {policies.map((policy) => (
        <Policy key={policy.id} policy={policy} />
      ))}
    </ul>
  </div>

  {/* Contact Section */}
  <div className="px-6 col-span-2">
    <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">Contact</h3>
    <ul className="mt-4 space-y-6">
      {contactDetails.map((contact) => (
        <ContactInfo key={contact.id} contact={contact} />
      ))}
    </ul>
  </div>
</div>

        </div>
        {/* Footer bottom */}
        <div className="mt-16 border-t border-ccLightBlue/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; 2024 CC Diagnostics</p>
        </div>
      </div>
    </footer>
  );
}
