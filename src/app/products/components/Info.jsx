// import Image from 'next/image';
// import Methica_CC_prototype_2 from '@/src/assets/images/Methica_CC_prototype_2.jpg';
// import Link from 'next/link';

// export default function Info() {
//   return (
//     <>
//       <div className="relative bg-ccLightBlue/5 py-12 px-4 sm:px-6 md:px-12 lg:flex lg:items-center lg:py-16 lg:px-24">
//         {/* Text Section */}
//         <div className="mx-auto max-w-2xl lg:max-w-lg lg:w-1/2">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ccDarkBlue">
//             Methica CC Kit
//           </h1>
//           <p className="mt-4 text-lg leading-8 text-gray-600">
//             Superior Diagnostic Methods for Cervical Cancer Detection
//           </p>
//           <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-x-6 gap-y-4">
//             <Link
//               href="/contact"
//               className="rounded-md bg-ccDarkBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ccLightBlue hover:text-ccDarkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
//             >
//               Order Here
//             </Link>
//             <a
//               href="#techspecs"
//               className="text-sm font-semibold leading-6 text-ccDarkBlue hover:text-ccLightBlue"
//             >
//               Learn More <span aria-hidden="true">→</span>
//             </a>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="mt-10 lg:mt-0 lg:ml-8 lg:w-1/2">
//           <Image
//             src={Methica_CC_prototype_2}
//             alt="Methica CC Prototype"
//             className="w-full h-auto rounded-md object-cover lg:h-full lg:object-right"
//             priority 
//           />
//         </div>
//       </div>
//     </>
//   );
// }

import Image from 'next/image';
import Methica_CC_prototype_2 from '@/src/assets/images/Methica_CC_prototype_2.jpg';
import Link from 'next/link';
export default function Info() {
  return (
    <>
      <div className="relative bg-white py-12">
        <div className="relative">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 lg:w-full lg:max-w-2xl py-12 md:py-16">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 py-12 md:py-16 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <h1 className="text-4xl font-bold tracking-tight text-ccDarkBlue sm:text-6xl">
                    Methica CC Kit
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-gray-600">
                    Superior Diagnostic Methods for Cervical Cancer Detection
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
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
              </div>
            </div>
          </div>
          {/* Ensure the image covers the container */}
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
          <Image
              src={Methica_CC_prototype_2}
              alt="Methica CC Prototype"
              className="aspect-[3/2] object-cover object-right lg:aspect-auto lg:h-full lg:w-full"
              layout="cover"
              priority // Optionally prioritize loading of this image
            />
          </div>
        </div>
      </div>
    </>
  );
}