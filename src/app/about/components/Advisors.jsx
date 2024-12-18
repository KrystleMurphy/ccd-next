// components/Advisors.jsx
import Image from 'next/image';
import PersonPlaceholder from "@/src/assets/images/person_placeholder.jpeg";

const renderAdvisor = (advisor) => {
  const linkedInUrl = advisor.fields.LinkedIn?.[0]?.url || '#';

  return (
    <li key={advisor.id} className="text-center">
      <Image
        src={advisor.fields.Photo && advisor.fields.Photo.length > 0 ? advisor.fields.Photo?.[0]?.url : PersonPlaceholder}
        alt={advisor.fields.Name || 'Advisor Photo'}
        width={224}
        height={224}
        className="mx-auto h-56 w-56 rounded-full object-cover"
      />
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-ccDarkBlue">
        {advisor.fields.Name}
      </h3>
      <p className="text-sm leading-6 text-ccDarkBlue">{advisor.fields.Role}</p>
      <ul role="list" className="flex justify-center gap-x-6 p-6">
        {advisor.fields.LinkedIn && advisor.fields.LinkedIn.length > 0 && (
          <li>
            <a href={linkedInUrl} className="text-ccDarkBlue hover:text-ccLightBlue">
              <span className="sr-only">LinkedIn</span>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <path
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </a>
          </li>
        )}
      </ul>
      <p className="text-sm leading-6 text-gray-600 text-justify">
        {advisor.fields.Description}
      </p>
    </li>
  );
};

export default function Advisors({ advisorsData }) {
  // Filter advisors from the data
  const advisors = advisorsData.filter((item) => item.fields.Category === 'Advisor');

  return (
    <div id="team" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl relative p-3">
            Our Advisors
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {advisors.map(renderAdvisor)}
        </ul>
      </div>
    </div>
  );
}
