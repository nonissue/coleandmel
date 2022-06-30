/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */

import { Nav } from "src/components/Nav";

import Link from "next/link";
import { GridBg, Timeline } from "@/components";

export default function TheSpecialDay() {
  return (
    // This div contains everything
    <div className="bg-gray-50 pb-16">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <GridBg />
        {/* Hero Nav */}

        <Nav showLogo={true} />

        {/* Hero Copy */}
        <div className="pt-4 pb-6 md:mt-8 md:pb-0">
          <div className="mx-auto mt-6 max-w-7xl px-4 md:mt-0 md:px-6">
            <div className="text-center">
              <h1 className="mx-auto max-w-sm  pb-0 text-4xl tracking-normal text-gray-800 md:pb-6 md:pt-8 md:text-6xl md:leading-tight">
                <span className="block pb-1 font-ebgaramond text-base font-[400] uppercase  tracking-widest text-gray-700 md:text-xs">
                  July 21st, 2022
                </span>
                <span className="block font-ebgaramond text-3xl font-[400] tracking-tight text-slate-700 md:text-2xl">
                  The Special Day
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* 
      Page Body Copy
       */}

        <article className="my-4 mx-6 max-w-3xl items-center justify-around space-y-1 text-center md:mx-auto">
          <Timeline />
          <div className="mx-auto max-w-md space-y-4 rounded-none border-2 border-dotted border-slate-300 bg-slate-50 p-6 text-left text-slate-600 shadow-sm md:max-w-xl">
            <h2 className="text-center font-fraunces text-2xl font-[600] md:text-left">
              Considerations
            </h2>
            <ul className="list-disc pl-4 font-ebgaramond">
              <li>Our Ceremony and reception will be held outdoors.</li>
              <li>
                We love your children, but due to space and venue restrictions
                we cannot accommodate guests under age 18 on our wedding day or
                any additional guests.
              </li>
              Please consider carpooling as parking is extremely limited.
              <li>
                Please join us for an informal brunch at 9:30am on Friday, Jul
                22, 2022 at the house on the Origin Wines property.
              </li>
              <li>
                Please
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdcnsp-SaZPPtPfvHZRtf9imzzwRsCkmNVFDESI4OWoqNwDLQ/viewform">
                  <a
                    className="mx-1 border-b border-indigo-300 font-playfair font-[500] not-italic tracking-wide text-sky-800  duration-300
          hover:border-rose-300/70 hover:text-pink-700  
          md:border-b md:px-0.5 md:leading-loose"
                  >
                    R.S.V.P.
                  </a>
                </Link>
                as soon as possible if you haven{"'"}t already done so.
              </li>
            </ul>
          </div>
          {/* <RSVPReminder /> */}
        </article>
      </div>
    </div>
  );
}
