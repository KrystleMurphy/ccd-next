// components/Partners.jsx
import Image from 'next/image';
import logo_erdf2014 from '@/src/assets/images/logo_erdf2014.png'
const renderPartnerLogo = (partner) => {
  const logoUrl = partner.fields.Logo?.[0]?.url || '/images/placeholder.png';
  const partnerSite = partner.fields.Site || '#';

  return (
    <a
      key={partner.id}
      href={partnerSite}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm leading-6 text-gray-600 hover:text-ccLightBlue"
    >
      <Image
        src={logoUrl}
        alt={partner.fields.Partner || 'Partner Logo'}
        width={105}
        height={48}
        className="max-h-24 w-full object-contain object-center shadow-md"
      />
    </a>
  );
};

export default function Partners({ partnersData }) {
 
  // const euLogo = "/images/logo_erdf2014.png";

  return (
    <div className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="pb-16 text-center text-3xl font-semibold leading-8 text-ccDarkBlue">
          Our Partners
        </h2>

        {/* Render the EU Logo */}
        <div className="flex justify-center items-center mx-auto w-full max-w-xl grid-cols-2 gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
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
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {partnersData.map(renderPartnerLogo)}
        </ul>
      </div>
    </div>
  );
}
