import { useState } from 'react';
import Airtable from '../../../components/common/Airtable/Airtable';

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const container = (item, index) => {
    return (
      <div className="collapse collapse-arrow bg-base-200 mb-4" key={index}>
        <input
          type="checkbox"
          className="peer"
          checked={openIndex === index}
          onChange={() => handleToggle(index)}
        />
        <div
          className="collapse-title text-xl font-medium cursor-pointer whitespace-nowrap border-b-2 border-transparent py-6 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 data-[selected]:border-ccDarkBlue data-[selected]:text-ccDarkBlue"
          onClick={() => handleToggle(index)}
        >
          {item.fields.Title} {/* Ensure you reference the correct field */}
        </div>
        {openIndex === index && (
          <div className="collapse-content p-4 space-y-16 pt-10 lg:pt-16">
          <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8'>
          <div className="mt-6 lg:col-span-5 lg:mt-0">
            <p>{item.fields.Features}</p> {/* Ensure you reference the correct field */}
            </div>
            </div>
            <div className="lg:col-span-7">
                        <div className="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2">
                          <img alt={item.fields.Title} src={item.fields.Image[0].url} className="object-cover object-center" />
                        </div>
                      </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white">
      <div aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0 p-8">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technical Specifications
            </h2>
          </div>
          <div className="p-8">
            <Airtable 
              tableName="TechnicalSpecifications" // Corrected the spelling here
              view="Grid view" 
              renderItem={container} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
