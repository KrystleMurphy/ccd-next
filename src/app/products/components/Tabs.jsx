import { Fragment, useEffect, useState } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import airtableBase from '../../../utils/airtableapi';

export default function Tabs() {
  const [tabs, setTabs] = useState([]); // State to hold tabs data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to transform Airtable records into tabs
  const transformRecordsToTabs = (records) => {
    return records.map((item) => ({
      name: item.fields.Title || "Untitled", 
      features: [
        {
          name: item.fields.Title || "Feature", // Default name if not provided
          description: item.fields.Features || "No description available.", // Default description if not provided
          imageSrc: (item.fields.Image && item.fields.Image[0]?.url) || "", // Ensure the image exists
          imageAlt: item.fields.Title || "Image", // Using the title as alt text
        },
      ],
    }));
  };

  // Function to fetch data from Airtable
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const records = await fetchAirtableRecords(); // Call the fetch function
      const newTabs = transformRecordsToTabs(records);
      setTabs(newTabs); // Set tabs based on fetched data
    } catch (err) {
      setError(err);
      console.error("Error fetching Airtable data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div id="techspecs" className="bg-white">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:py-40 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
              Technical Specifications
            </h2>
            {/* <p className="mt-4 text-gray-500">
              The Organize modular system offers endless options for arranging your favorite and most used items. Keep
              everything at reach and in its place, while dressing up your workspace.
            </p> */}
          </div>

          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}

          {tabs.length > 0 && (
            <TabGroup className="mt-4">
              <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                  <TabList className="-mb-px flex space-x-10">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          selected
                            ? 'text-sm font-semibold leading-6 text-ccDarkBlue border-b-2 border-ccLightBlue'
                            : 'text-sm font-semibold leading-6 text-ccDarkBlue py-6 font-medium'
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
                          <h3 className="text-lg font-medium text-ccDarkBlue">{feature.name}</h3>
                          <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                        </div>
                        <div className="lg:col-span-7">
                          <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                            {feature.imageSrc && (
                              <img alt={feature.imageAlt} src={feature.imageSrc} className="object-cover object-center" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          )}
        </div>
      </section>
    </div>
  );
}

// Fetch Airtable records function to be defined in Airtable component
const fetchAirtableRecords = async () => {
  return new Promise((resolve, reject) => {
    airtableBase('TechnicalSpecifications')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        const formattedRecords = records.map((record) => record._rawJson);
        if (formattedRecords.length > 0) {
          resolve(formattedRecords); // Resolve with formatted records
        } else {
          resolve([]); // Resolve with an empty array if no records are found
        }
        fetchNextPage(); // Fetch next page
      }, (error) => {
        if (error) {
          reject(error); // Reject if there's an error
        }
      });
  });
};
