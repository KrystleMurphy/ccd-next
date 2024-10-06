'use client'; 

import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import cc_arrowLong from '../../../assets/images/cc_arrowLong.png';
import bisulfiteDNA from '@/src/assets/images/bisulfiteDNA.png';
import clinicalSample from '@/src/assets/images/clinicalSample.png';
import isolatedDNA from '@/src/assets/images/isolatedDNA.png';
import qPCR from '@/src/assets/images/qPCR.png';

const Step = ({ icon: Icon, imageSrc, label }) => (
  <div className="flex flex-col items-center justify-center">
    {Icon && <Icon aria-hidden="true" className="h-12 w-12" />}
    {imageSrc && (
      <Image
        src={imageSrc}
        alt={label}
        width={204}
        height={204}
        layout="fixed"
        objectFit="contain"
        aria-hidden="true"
        priority
      />
    )}
    <p className="text-center">{label}</p>
  </div>
);

const TextSection = ({ duration, handsOnTime, samples, description }) => (
  <div className="flex flex-col justify-center w-full lg:w-1/2 pl-4 bg-white rounded py-4">
    <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">{`Duration: ${duration}`}</h3>
    <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">{`Hands-on time: ${handsOnTime}`}</h3>
    <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">{`Samples: ${samples}`}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const Section = ({ steps, textSectionProps }) => (
  <div className="divide-y divide-gray-200 overflow-hidden rounded-lg mx-auto max-w-7xl sm:px-2 lg:px-4">
    <div className="rounded group relative bg-white p-6 flex flex-col lg:flex-row w-full">
      <div className="flex items-center justify-between w-full lg:w-1/2 bg-white rounded">
        <div className="flex gap-12 w-full text-ccDarkBlue">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              imageSrc={step.imageSrc}
              label={step.label}
            />
          ))}
        </div>
      </div>
      <TextSection {...textSectionProps} />
    </div>
  </div>
);

export default function Flow() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl  py-12 sm:px-2 md:py-16 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <p className="mt-2 text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
              Methica CC Kit Workflow
            </p>
          </div>
        </div>

        <div className="pt-12 sm:pt-16">
          {/* Section 1 */}
          <Section
            steps={[
              { imageSrc: clinicalSample, label: 'Clinical sample' },
              { icon: ArrowRightIcon, label: 'Nucleic acid isolation' },
              { imageSrc: isolatedDNA, label: 'Isolated DNA' },
            ]}
            textSectionProps={{
              duration: '1h',
              handsOnTime: '30 min',
              samples: '96 samples',
              description:
                'DNA isolation with column-based or magnetic bead-based kits or equivalent',
            }}
          />

          {/* Section 2 */}
          <Section
            steps={[
              { imageSrc: isolatedDNA, label: 'Isolated DNA' },
              { icon: ArrowRightIcon, label: 'Bisulfite treatment' },
              { imageSrc: bisulfiteDNA, label: 'Bisulfite treated DNA' },
            ]}
            textSectionProps={{
              duration: '17.5h (12-16h)',
              handsOnTime: '4h',
              samples: '96 samples',
              description:
                'After quality control bisulfite treatment performed with the EZ DNA Methylation TM kit',
            }}
          />

          {/* Section 3 */}
          <Section
            steps={[
              { imageSrc: bisulfiteDNA, label: 'Bisulfite treated DNA' },
              { icon: ArrowRightIcon, label: 'Methica CC kit' },
              { imageSrc: qPCR, label: 'Interpretation with qPCR software' },
            ]}
            textSectionProps={{
              duration: '3h',
              handsOnTime: '30 min',
              samples: '94 samples',
              description:
                'Methica CC kit test preparation and interpretation with Lightcycler ® 480 instrument II',
            }}
          />
        </div>
      </div>
    </div>
  );
}
