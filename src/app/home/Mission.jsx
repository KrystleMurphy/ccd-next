"use client";

import ContactLight from "@/src/components/contact-buttons/ContactLight"
import Image from "next/image";
import women from "@/src/assets/images/women.png"
  
  export default function Mission() {
    return (
      <div className="bg-ccLightBlue/5 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* img container below */}
            <div className="lg:pr-4 h-full">
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 h-full">
                {/* Optimized image using next/image */}
              <Image
                src={women}
                alt="" 
                fill
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
              />
                {/* <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" /> */}

              </div>
            </div>

            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-ccDarkBlue">CC Diagnostics</p>
                <h1 className="mt-2 text-3xl max-sm:text-2xl max-md:text-3xl max-lg:text-4xl max-xl:text-5xl font-bold tracking-tight text-ccDarkBlue sm:text-4xl">
                Empowering women through
                optimal cervical cancer screening performance, availability and comfort.
                </h1>
                <div className="max-w-xl">
                  <p className="mt-8 text-base max-sm:text-sm max-md:text-base max-2xl:text-lg max-sm:leading-5">
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
    )
  }
  