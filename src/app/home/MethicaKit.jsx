
'use client';
import Image from 'next/image';
import Link from 'next/link';
import Methica_CC_prototype_2 from '@/src/assets/images/Methica_CC_prototype_2.jpg'


const stats = [
  { id: 1, name: 'Of cases detected using CC Diagnostics superior technology', value: '97%' },
  { id: 2, name: 'More sensitive than Pap smear', value: '26%' },
  { id: 3, name: 'Times less hands on time of lab-technicians.', value: '6X' },
];

export default function MethicaKit() {
  return (
    <div className="bg-ccLightBlue/5 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          {/* Text content */}
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-ccDarkBlue">Our Solution</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
                Methica CC Kit
              </h1>
              <p className="mt-6 text-base max-sm:text-sm max-md:text-base max-2xl:text-lg max-sm:leading-5 leading-8 text-gray-600">
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
                    <dt className="text-sm max-sm:leading-5 leading-6 text-gray-600">{stat.name}</dt>
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