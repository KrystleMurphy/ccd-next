'use client'
import DNA from '../assets/DNA.jpeg'
import ContactLight from "../../../components/common/ContactButtons/ContactLight"

export default function Hero() {

  return (
      <div className="relative isolate overflow-hidden pt-14 py-32 sm:py-40">
        <img
          alt="DNA strand"
          src={DNA}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black opacity-40"></div> {/* Overlay */}

        <div className="m-20 max-w-2xl">
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Superior Diagnostic Methods for Cervical Cancer Detection
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              At CC Diagnostics, we harness the power of medical advancements to improve the detection of cervical cancer. Our innovative solutions provide accurate and timely results, ensuring early intervention and better outcomes for patients.
            </p>
            <div className="mt-10 flex items-center justify-left gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-ccDarkBlue shadow-sm hover:bg-ccLightBlue hover:text-ccDarkBlue 
                hover:border-solid hover:border-ccLightBlue
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ccDarkBlue"
              >
                Contact Us
              </a>
              <a href="#stats" className="text-sm font-semibold leading-6 text-white hover:text-ccLightBlue">
                learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}
