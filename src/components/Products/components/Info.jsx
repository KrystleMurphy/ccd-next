// components/Info.jsx
import Image from 'next/image'; // Import Next.js Image component

export default function Info() {
  return (
    <div className="relative bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl py-32 sm:py-40">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-ccDarkBlue sm:text-6xl">
                  Methica CC Kit
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Superior Diagnostic Methods for Cervical Cancer Detection
                </p>
                <div className="mt-10 flex items-center gap-x-6">
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
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
          <Image
            src="/images/Methica_CC_prototype_2.jpg" // Reference the image directly from the public folder
            alt="Methica CC Prototype"
            width={800} // Adjust width as needed for responsiveness
            height={600} // Adjust height as needed for responsiveness
            className="aspect-[3/2] object-cover object-right scale-150 -translate-x-1/4 lg:aspect-auto lg:h-full lg:w-full"
            priority // Ensures the image is loaded quickly since it's above the fold
          />
        </div>
      </div>
    </div>
  );
}
