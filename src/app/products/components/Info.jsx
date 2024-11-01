import Image from 'next/image';
import Methica_CC_prototype_2 from '@/src/assets/images/Methica_CC_prototype_2.jpg';
import Link from 'next/link';

export default function Info() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-ccLightBlue/10 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-ccLightBlue/10 ring-1 ring-ccLightBlue/10 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
           

            {/* Text and links container */}
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-ccDarkBlue sm:text-6xl lg:col-span-2 xl:col-auto">
                Methica CC Kit
              </h1>
              <p className="text-lg leading-8 text-gray-600 mt-4">
                Superior Diagnostic Methods for Cervical Cancer Detection
              </p>

               {/* Image container for small screens */}
            <div className="lg:hidden">
              <Image
                alt="Methica CC Product"
                src={Methica_CC_prototype_2}
                className="my-10 max-h-[300px] w-full max-w-lg rounded-2xl object-cover"
                priority
              />
            </div>
              <div className="mt-10 flex items-center gap-x-6 mt-4">
                <Link
                  href="/contact"
                  className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ccLightBlue hover:text-ccDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
                >
                  Order Kit
                </Link>
                <a
                  href="#techspecs"
                  className="text-sm font-semibold leading-6 text-ccDarkBlue hover:text-ccLightBlue"
                >
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Image container for larger screens */}
            <div className="hidden lg:block">
              <Image
                alt="Methica CC Product"
                src={Methica_CC_prototype_2}
                className="mt-10 max-h-[300px] w-full max-w-lg rounded-2xl object-cover lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
