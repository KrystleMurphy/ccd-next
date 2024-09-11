// src/app/Footer.jsx
'use client'; // Ensure this component is a Client Component

import Image from "next/image";
import logo from "@/src/assets/images/logo.png";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import SearchBar from "./search-docs/SearchBar";
import Link from 'next/link';

// Define icons for contact methods
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

// Component to render policy links
const Policy = ({ policy }) => (
  <Link 
    href={policy.fields.Document[0].url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-sm leading-6 text-gray-600 hover:text-ccLightBlue"
  >
    {policy.fields.Policy}
  </Link>
);

// Main Footer component that renders the contact details and policies
export default function Footer({ contactDetails, policies }) {
  return (
    <footer aria-labelledby="footer-heading" className="bg-ccAliceBlue">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <Image src={logo} alt="CC Diagnostics Logo" width={100} height={28} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            {/* Site Map and Social Media */}
          </div>
          <div>
            {/* Policies */}
            {policies.map(policy => <Policy key={policy.id} policy={policy} />)}
          </div>
          <div>
            {/* Contact Details */}
            {contactDetails.map(contact => <ContactInfo key={contact.id} contact={contact} />)}
          </div>
        </div>
        <SearchBar />
      </div>
    </footer>
  );
}
