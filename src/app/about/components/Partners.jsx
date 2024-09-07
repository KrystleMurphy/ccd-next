// components/Partners.jsx
import Image from 'next/image'; // Import Next.js Image component
import Airtable from "../../common/Airtable/Airtable";
import ContactHeavy from "../../common/ContactButtons/ContactHeavy";

const renderPartnerLogo = (partner) => {
  // Safely access fields and provide fallback for missing or empty values
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

export default function Partners() {
  return (
    <div className="bg-white py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="pb-16 text-center text-3xl font-semibold leading-8 text-ccDarkBlue">
          Our Partners
        </h2>
        
        <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
          <Image
            src="/images/logo_erdf2014.png"
            alt="European Logo"
            width={105}
            height={48}
            className="max-h-24 w-full object-contain object-center"
          />
        </div>

        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          <Airtable
            tableName="Partners"
            view="Grid view"
            renderItem={renderPartnerLogo}
          />
        </ul>
        
        <div className="mt-8 flex items-center gap-x-6 justify-center">
          <ContactHeavy />
        </div>
      </div>
    </div>
  );
}
