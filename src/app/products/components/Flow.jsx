import React from 'react';
import {
  BeakerIcon,
  ArrowLongRightIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import cc_arrowLong from "../../../assets/images/cc_arrowLong.png";

const Step = ({ icon: Icon, imageSrc, label }) => (
  <div className="flex flex-col items-center justify-center">
    {Icon && <Icon aria-hidden="true" className="h-12 w-12" />}
    {imageSrc && <img src={imageSrc} aria-hidden="true" className="h-12 w-12" />}
    <p className="text-center">{label}</p>
  </div>
);

const TextSection = ({ duration, handsOnTime, samples, description }) => (
  <div className="flex flex-col justify-center w-full lg:w-1/2 pl-4 bg-ccAliceBlue/40 rounded py-4">
    <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">{`Duration: ${duration}`}</h3>
    <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">{`Hands-on time: ${handsOnTime}`}</h3>
    <h3 className="text-base font-semibold leading-6 text-ccDarkBlue">{`Samples: ${samples}`}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

const Section = ({ steps, textSectionProps }) => (
  <div className="divide-y divide-gray-200 overflow-hidden rounded-lg mx-auto max-w-7xl sm:px-2 lg:px-4">
    <div className="rounded group relative bg-white p-6 flex flex-col lg:flex-row w-full">
      <div className="flex items-center justify-between w-full lg:w-1/2 bg-ccAliceBlue/40 rounded">
        <div className="flex gap-12 w-full">
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
      <div className="mx-auto max-w-7xl sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="max-w-3xl">
            <p className="mt-2 text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
              Methica CC Kit Workflow
            </p>
          </div>
        </div>

        <div className='py-24 sm:py-24'>
          {/* Section 1 */}
          <Section
            steps={[
              { icon: BeakerIcon, label: 'Clinical sample' },
              { imageSrc: cc_arrowLong, label: 'Nucleic acid isolation' },
              { icon: ArrowPathIcon, label: 'Isolated DNA' }
            ]}
            textSectionProps={{
              duration: '1h',
              handsOnTime: '30 min',
              samples: '96 samples',
              description: 'DNA isolation with column-based or magnetic bead-based kits or equivalent'
            }}
          />

          {/* Section 2 */}
          <Section
            steps={[
              { icon: BeakerIcon, label: 'Isolated DNA' },
              { imageSrc: cc_arrowLong, label: 'Bisulfite treatment' },
              { icon: ArrowPathIcon, label: 'Bisulfite treated DNA' }
            ]}
            textSectionProps={{
              duration: '17.5h (12-16h)',
              handsOnTime: '4h',
              samples: '96 samples',
              description: 'After quality control bisulfite treatment performed with the EZ DNA Methylation TM kit'
            }}
          />

          {/* Section 3 */}
          <Section
            steps={[
              { icon: BeakerIcon, label: 'Bisulfite treated DNA' },
              { imageSrc: cc_arrowLong, label: 'Methica CC kit' },
              { icon: ArrowPathIcon, label: 'Interpretation with qPCR software' }
            ]}
            textSectionProps={{
              duration: '3h',
              handsOnTime: '30 min',
              samples: '94 samples',
              description: 'Methica CC kit test preparation and interpretation with Lightcycler ® 480 instrument II'
            }}
          />
        </div>
      </div>
    </div>
  );
}
