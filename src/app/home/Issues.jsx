
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ClockIcon, ExclamationTriangleIcon, UserMinusIcon } from '@heroicons/react/24/outline'
import Methica_CC_prototype_2 from '@/src/assets/images/Methica_CC_prototype_2.jpg'
import ContactLight from "@/src/components/contact-buttons/ContactLight"

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
    <div className="bg-white py-12 md:py-16">
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
