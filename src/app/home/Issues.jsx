
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ClockIcon, ExclamationTriangleIcon, UserMinusIcon } from '@heroicons/react/24/outline'
import Methica_CC_prototype_2 from '@/src/assets/images/Methica_CC_prototype_2.jpg'
import ContactLight from "@/src/components/contact-buttons/ContactLight"

// const supportLinks = [
//   {
//     name: 'almost 30% missed cancers',
//     href: '#',
//     description:
//       'almost 30% missed cancers',
//     icon: ExclamationTriangleIcon,
//   },
//   {
//     name: 'painful & uncomfortable',
//     href: '#',
//     description:
//       'painful & uncomfortable',
//     icon: UserMinusIcon,
//   },
//   {
//     name: 'long & laborious process',
//     href: '#',
//     description:
//       'long & laborious process',
//     icon: ClockIcon,
//   },
// ]

// export default function MethicaKit() {
//   return (
//     <div  id="methicaKit" className="bg-ccAliceBlue">
//       {/* Header */}
//       <div className="relative bg-white pb-32"> 
//         <div className="absolute inset-0 opacity-50">
//         <Image
//           src={Methica_CC_prototype_2}
//           alt="Methica Kit"
//           fill
//           className="absolute inset-0 -z-10 h-full w-full object-cover"
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//         />
//           <div aria-hidden="true" className="absolute inset-0 bg-ccDarkBlue mix-blend-screen backdrop-blur-sm	" />
//         </div>
//         <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
//           <h1 className="text-4xl font-bold tracking-tight text-ccDarkBlue md:text-5xl lg:text-6xl">Issues in current screening</h1>
//           {/* <p className="mt-6 text-xl text-gray-900 text-center">
//           Revolutionary screening technology detecting cervical cancer early using novel epigenetic markers.
//           </p> */}
//         </div>
//       </div>

//       {/* Overlapping cards */}
//       <section aria-labelledby="contact-heading" className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 pb-6 lg:px-8">
//       {/* changed the pb-32 for one central button taking you to the product page */}
//         <h2 id="contact-heading" className="sr-only">
//           Contact us
//         </h2>
//         <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
//           {supportLinks.map((link) => (
//             <div key={link.name} className="flex flex-col rounded-2xl bg-white shadow-xl">
//               <div className="relative flex-1 px-6 pb-8 pt-16 md:px-8">
//                 <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-ccDarkBlue p-5 shadow-lg">
//                   <link.icon aria-hidden="true" className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-medium text-ccDarkBlue">{link.name}</h3>
//                 <p className="mt-4 text-base text-gray-500">{link.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <div className='flex justify-center items-center'>
//       <Link // Use Next.js Link component
//           href="/products"
//           className="relative mx-auto max-w-7xl px-6 py-12 sm:py-12 lg:px-8 text-sm font-semibold leading-6 text-ccDarkBlue hover:text-ccLightBlue"
//         >
//           Learn More <span aria-hidden="true">→</span>
//         </Link>
//       </div>
//     </div>
//   )
// }


const features = [
  {
    name: 'Almost 30% Missed Cancers',
    description:
      'Each 4-week delay in diagnosis results in a 10% increase in mortality, significantly affecting womens health in a negative and clinically meaningful way.',
    href: '#',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Painful & Uncomfortable',
    description:
      'Current participation of targeted women in cervical cancer screenings is only at 15% due to global inequities and associated emotional and physical barriers.',
    href: '#',
    icon: UserMinusIcon,
  },
  {
    name: 'Long & Laborious Process',
    description:
      'Current protocol requires multiple samples and works counterproductively. Most currently used screening and triage techniques are not compatible with automation.',
    href: '#',
    icon: ClockIcon,
  },
]

export default function Issues() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
          Current Issues
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            
Cervical cancer is the 4th most common cancer in women that leads to high morbidity and mortality. There is a global inequity in access to screening and treatment.

          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-ccDarkBlue">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-ccDarkBlue">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    {/* <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a> */}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
