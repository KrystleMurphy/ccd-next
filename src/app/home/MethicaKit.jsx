
'use client';
import Image from 'next/image';
import Link from 'next/link';
// import { ArrowTrendingUpIcon, BeakerIcon, LifebuoyIcon, NewspaperIcon, PhoneIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import Methica_CC_prototype_2 from '@/src/assets/images/Methica_CC_prototype_2.jpg'
// import ContactLight from "@/src/components/contact-buttons/ContactLight"

// const supportLinks = [
//   {
//     name: '97%',
//     href: '#',
//     description:
//       'Of cases detected using CC Diagnostics superior technology',
//     icon: ArrowTrendingUpIcon,
//   },
//   {
//     name: '26%',
//     href: '#',
//     description:
//       'More sensitive than Pap smear',
//     icon: ShieldCheckIcon,
//   },
//   {
//     name: '6X',
//     href: '#',
//     description:
//       'Times less hands on time of lab-technicians.',
//     icon: BeakerIcon,
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
//           <h1 className="text-4xl font-bold tracking-tight text-ccDarkBlue md:text-5xl lg:text-6xl">Methica CC Kit</h1>
//           <p className="mt-6 text-xl text-ccDarkBlue text-center">
//           Revolutionary screening technology detecting cervical cancer early using novel epigenetic markers.
//           </p>
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



const stats = [
  { id: 1, name: 'Of cases detected using CC Diagnostics superior technology', value: '97%' },
  { id: 2, name: 'More sensitive than Pap smear', value: '26%' },
  { id: 3, name: 'Times less hands on time of lab-technicians.', value: '6X' },
];

export default function MethicaKit() {
  return (
    <div className="bg-ccLightBlue/5 py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Text content */}
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-ccDarkBlue">Our Solution</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
                Methica CC Kit
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Revolutionary screening technology detecting cervical cancer early using novel epigenetic markers.
              </p>
              <div className="py-8">
                <Link 
                  href="/contact" 
                  className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ccLightBlue hover:text-ccDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
                >
                  Order here
                </Link>
              </div>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col gap-y-3 border-l border-ccLightBlue pl-6">
                    <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-ccDarkBlue">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Image container (now on the right) */}
          <div className="lg:order-last lg:pl-4 h-full">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 h-full">
              <Image
                src={Methica_CC_prototype_2} 
                alt="Methica Kit"
                fill
                className="absolute inset-0 h-full w-full object-cover rounded-3xl"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}