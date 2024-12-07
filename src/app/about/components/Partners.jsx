// components/Partners.jsx
import Image from 'next/image';
import logo_erdf2014 from '@/src/assets/images/logo_erdf2014.png';
import placeholder from "@/src/assets/images/placeholder.png";

const renderPartnerLogo = (partner) => {
  const partnerSite = partner.fields.Site || '#';

  return (
    <li key={partner.id} role="listitem"> {/* Moved the li here */}
      <a
        href={partnerSite}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm leading-6 text-gray-600 hover:text-ccLightBlue"
      >
        <Image
          src={partner.fields.Logo && partner.fields.Logo.length > 0 ? partner.fields.Logo?.[0]?.url : placeholder}
          alt={partner.fields.Partner || 'Partner Logo'}
          width={105}
          height={48}
          className="max-h-24 w-full object-contain object-center shadow-md"
        />
      </a>
    </li>
  );
};

export default function Partners({ partnersData }) {
  return (
    <div className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="pb-16 text-center text-3xl sm:text-4xl font-semibold leading-8 text-ccDarkBlue">
          Our Partners
        </h2>

        {/* Render the EU Logo */}
        <div className="flex justify-center items-center mx-auto w-full max-w-xl gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
          <Image
            src={logo_erdf2014}
            alt="European Logo"
            className="max-h-24 w-full object-contain object-center"
            priority
          />
        </div>

        {/* Render Partner Logos */}
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {partnersData.map(renderPartnerLogo)} {/* No wrapping li here */}
        </ul>
      </div>
    </div>
  );
}
