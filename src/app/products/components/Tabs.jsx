import { Fragment } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Image from 'next/image';

export default function Tabs({ technicalSpecifications }) {
  // Transform Airtable records into tabs data
  const transformRecordsToTabs = (records) => {
    return records.map((item) => ({
      name: item.fields.Title || 'Untitled',
      features: [
        {
          name: item.fields.Title || 'Feature',
          description: item.fields.Features || 'No description available.',
          imageSrc: item.fields.Image?.[0]?.url || '',
          imageAlt: item.fields.Title || 'Image',
        },
      ],
    }));
  };

  // Transform the received data
  const tabs = transformRecordsToTabs(technicalSpecifications);

  return (
    <div id="techspecs" className="bg-white px-12">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
              Technical Specifications
            </h2>
          </div>

          {/* Render all content stacked on mobile devices */}
          <div className="block lg:hidden mt-8 space-y-10">
            {tabs.map((tab) => (
              <div key={tab.name} className="space-y-16">
                {tab.features.map((feature) => (
                  <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                    <div className="mt-6 lg:col-span-5 lg:mt-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-ccDarkBlue">{feature.name}</h3>
                      <p className="mt-2 text-sm sm:text-base text-gray-500">{feature.description}</p>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="relative overflow-hidden rounded-lg bg-gray-100" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                        {feature.imageSrc && (
                          <Image
                            alt={feature.imageAlt}
                            src={feature.imageSrc}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="rounded-lg"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Tabs structure for larger screens */}
          <div className="hidden lg:block">
            {tabs.length > 0 ? (
              <TabGroup className="mt-4">
                <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                  <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                    <TabList className="-mb-px flex space-x-10">
                      {tabs.map((tab) => (
                        <Tab
                          key={tab.name}
                          className={({ selected }) =>
                            selected
                              ? 'text-lg font-semibold leading-6 text-ccDarkBlue border-b-2 border-ccLightBlue outline-none focus:outline-none'
                              : 'text-lg leading-6 text-ccDarkBlue py-6 outline-none focus:outline-none'
                          }
                        >
                          {tab.name}
                        </Tab>
                      ))}
                    </TabList>
                  </div>
                </div>

                <TabPanels as={Fragment}>
                  {tabs.map((tab) => (
                    <TabPanel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                      {tab.features.map((feature) => (
                        <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                          <div className="mt-6 lg:col-span-5 lg:mt-0">
                            <h3 className="text-lg sm:text-xl font-medium text-ccDarkBlue">{feature.name}</h3>
                            <p className="mt-2 text-sm sm:text-base text-gray-500">{feature.description}</p>
                          </div>
                          <div className="lg:col-span-7">
                            <div className="relative overflow-hidden rounded-lg bg-gray-100" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                              {feature.imageSrc && (
                                <Image
                                  alt={feature.imageAlt}
                                  src={feature.imageSrc}
                                  layout="fill"
                                  objectFit="cover"
                                  objectPosition="center"
                                  className="rounded-lg"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </TabPanel>
                  ))}
                </TabPanels>
              </TabGroup>
            ) : (
              <p>No technical specifications available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
