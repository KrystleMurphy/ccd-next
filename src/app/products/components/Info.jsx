import Image from 'next/image';
import Methica_CC_prototype_2 from '@/src/assets/images/Methica_CC_prototype_2.jpg';
import Link from 'next/link';

export default function Info() {
  return (
    <>
      <div className="relative bg-ccLightBlue/5 py-12 px-4 sm:px-6 md:px-12 lg:flex lg:items-center lg:py-16 lg:px-24">
        {/* Text Section */}
        <div className="mx-auto max-w-2xl lg:max-w-lg lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ccDarkBlue">
            Methica CC Kit
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Superior Diagnostic Methods for Cervical Cancer Detection
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-x-6 gap-y-4">
            <Link
              href="/contact"
              className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ccLightBlue hover:text-ccDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
            >
              Order Here
            </Link>
            <a
              href="#techspecs"
              className="text-sm font-semibold leading-6 text-ccDarkBlue hover:text-ccLightBlue"
            >
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 lg:ml-8 lg:w-1/2">
          <Image
            src={Methica_CC_prototype_2}
            alt="Methica CC Prototype"
            className="w-full h-auto rounded-md object-cover lg:h-full lg:object-right"
            priority 
          />
        </div>
      </div>
    </>
  );
}
