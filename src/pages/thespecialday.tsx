/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { GridBg, Nav, Timeline } from "@/components";

export default function TheSpecialDay() {
  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <GridBg />
        {/* Hero Nav */}

        <Nav showLogo={true} />

        {/* Hero Copy */}
        <div className="pt-4 pb-6 md:mt-0 md:pb-0">
          <div className="mx-auto mt-6 max-w-7xl px-4 md:mt-0 md:px-6">
            <div className="text-center">
              <h1 className="mt-0s mx-auto mb-8 max-w-xl py-4 text-4xl tracking-normal text-gray-800 md:py-4 md:text-4xl md:leading-tight">
                <span className="border-b-0 border-dotted border-b-slate-400 px-3 py-1 font-serif text-xl font-[300] uppercase tracking-widest text-slate-800  md:text-lg">
                  July 21st, 2022
                </span>
                {/* <span className="block  font-ebgaramond text-3xl font-[500] tracking-tight text-slate-700 md:text-2xl">
                  The Special Day
                </span> */}
              </h1>
            </div>
          </div>
        </div>

        {/* 
      Page Body Copy
       */}

        <article className="my-4 mx-6 max-w-3xl items-center justify-around space-y-1 text-center md:mx-auto">
          <Timeline />
          <div className="relative mx-auto max-w-md space-y-4 rounded border border-slate-300 bg-slate-50 p-6 text-left text-slate-700 shadow-sm md:max-w-xl">
            <h2 className="text-center font-serif  text-2xl font-[500] md:text-left">
              Considerations
            </h2>
            <ul className="list-disc pl-4 font-ebgaramond text-slate-500">
              <li>Our ceremony and reception will be held outdoors.</li>
              <li>
                We love your children, but due to space and venue restrictions
                we cannot accommodate guests under age 18 on our wedding day or
                any additional guests.
              </li>
              <li>
                Please consider carpooling as parking is extremely limited.
              </li>
              <li>
                Please join us for an informal brunch at 9:30am on Friday, Jul
                22, 2022 at the house on the Origin Wines property.
              </li>
              <li>
                Wine will be served during the meal and additional drinks can be
                purchased at the bar until 10 PM for $2 + tip.
              </li>
              <li>
                If you need assistance with transportation to your accommodation
                after the reception, please contact{" "}
                <a
                  href="mailto:cole_savage@hotmail"
                  className="mx-0.5 border-b border-indigo-300 font-[500] not-italic tracking-wide text-sky-800  duration-300
          hover:border-rose-300/70 hover:text-pink-700  
          md:border-b md:px-0.5 md:leading-loose"
                >
                  Cole or Mel
                </a>
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
        </article>
      </div>
    </div>
  );
}
