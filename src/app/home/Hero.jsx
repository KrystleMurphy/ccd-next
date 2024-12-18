'use client'
import Image from 'next/image';
import Link from 'next/link';
import DNA from '../../assets/images/DNA.jpeg'
import ContactLight from "@/src/components/contact-buttons/ContactLight"

export default function Hero() {

  return (
      <div className="relative isolate overflow-hidden pt-14 py-32 sm:py-40">
              {/* Optimized image using next/image */}
      <Image
        src={DNA}
        alt="DNA strand"
        fill // Fill the container
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true} // Use this for above-the-fold images
      />
        <div className="absolute inset-0 -z-10 bg-black opacity-40"></div> {/* Overlay */}

        <div className="px-6 md:pl-12 lg:pl-16 xl:pl-32 max-w-4xl">
          <div className="text-left">
          {/* text-4xl */}
            <h1 className="max-sm:text-3xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl max-2xl:text-5xl font-bold text-white" style={{ textShadow: '3px 3px 20px rgba(0, 0, 0, 0.8)' }}>
              Superior Diagnostic Methods for Cervical Cancer Detection
            </h1>
            <p className="mt-6 text-base max-sm:text-sm max-md:text-base max-2xl:text-lg max-sm:leading-5 leading-8 text-white" style={{ textShadow: '3px 3px 5px rgba(0, 0, 0, 1)' }}>
              At CC Diagnostics, we harness the power of medical advancements to improve the detection of cervical cancer. Our PCR-based reagent kit provide accurate and timely results, ensuring early intervention and better outcomes for patients.
            </p>
            <div className="mt-10 flex items-center justify-left gap-x-6">
            <Link href="#stats" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-ccDarkBlue shadow-sm hover:bg-ccLightBlue hover:text-ccDarkBlue 
                hover:border-solid hover:border-ccLightBlue
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue">
              Learn More
            </Link>
              <a href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-ccLightBlue">
                Contact Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
