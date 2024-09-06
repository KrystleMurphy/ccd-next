// components/Mission.jsx
import ContactLight from "../../common/ContactButtons/ContactLight";
import Image from 'next/image'; // Import Next.js Image component

export default function Mission() {
  return (
    <div className="bg-ccAliceBlue py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Image container below */}
          <div className="lg:pr-4 h-full">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 h-full">
              <Image
                src="/images/women.png" // Updated path to point to the public folder
                alt="Empowering women"
                layout="fill" // Use layout fill to cover the background
                objectFit="cover"
                className="absolute inset-0"
              />
              {/* <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" /> */}
            </div>
          </div>

          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-ccDarkBlue">CC Diagnostics</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
                Empowering women through optimal cervical cancer screening performance, availability, and comfort.
              </h1>
              <div className="max-w-xl">
                <p className="mt-8">
                  At CC Diagnostics, we believe that early detection is key to improving patient outcomes. Our innovative medical advances are revolutionizing cervical cancer detection, providing accurate and timely results that can save lives.
                </p>
              </div>
            </div>
            <div className="mt-10 flex">
              <a href="#methicaKit" className="text-sm font-semibold leading-6 text-ccDarkBlue hover:text-ccLightBlue">
                Methica CC <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
