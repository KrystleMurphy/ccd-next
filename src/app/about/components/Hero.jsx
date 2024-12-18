import Image from 'next/image';
import Link from 'next/link';
import teamPhoto from '@/src/assets/images/teamPhoto.jpg';
import ContactHeavy from '@/src/components/contact-buttons/ContactHeavy';
export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-ccLightBlue/10 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-ccLightBlue/10 ring-1 ring-ccLightBlue/10 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8">
          <div className=" mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-sm:text-3xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl max-2xl:text-5xl font-bold tracking-tight text-ccDarkBlue sm:text-6xl lg:col-span-2 xl:col-auto ">
              Our Journey Towards Medical Advancements
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-base max-sm:text-sm max-md:text-base max-2xl:text-lg leading-8 text-gray-600">
                At CC Diagnostics, we are dedicated to pushing the boundaries of medical technology to improve cervical cancer detection. With a strong commitment to innovation and patient care, we strive to make a positive impact on women&apos;s health.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <ContactHeavy />
                <Link href="#team" className="text-sm font-semibold leading-6 text-ccDarkBlue hover:text-ccLightBlue">
                  Our Team <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <Image
              alt="CC-Diagnostics team photo"
              src={teamPhoto}
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
              width={600} // Add appropriate width and height based on the image's dimensions
              height={500}
              priority // This helps prioritize the loading of the image
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}