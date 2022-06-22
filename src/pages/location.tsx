/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */

import Link from "next/link";
import { NavMenu } from "src/components/Version2/Nav";

const GridBg = () => {
  return (
    <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
      <div className="relative h-full">
        <svg
          className="absolute right-full translate-y-1/3 translate-x-1/4 transform opacity-40 sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
          />
        </svg>
        <svg
          className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform opacity-50 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="d2a68204-c383-44b1-b99f-42ccff4e5365"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
          />
        </svg>
      </div>
    </div>
  );
};

export default function Example() {
  return (
    // This div contains everything
    <div className="bg-gray-50 pb-16">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <GridBg />
        {/* Hero Nav */}

        <NavMenu showLogo={true} />

        {/* Hero Copy */}
        <div className="relative pt-4 pb-12 sm:pb-8 md:mt-8">
          <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 md:mt-0">
            <div className="text-center">
              <h1 className="space-y-0 text-4xl tracking-normal text-gray-800 sm:text-5xl md:mb-12 md:pt-8 md:text-6xl md:leading-tight">
                <span className="block pb-2 font-ebgaramond text-4xl font-[400] uppercase  tracking-widest text-gray-700 md:text-3xl">
                  Join us at
                </span>
                <span className="block font-fraunces text-7xl font-[900] tracking-tight text-blue-800 md:text-8xl">
                  Origin Wines
                </span>
                <span className="block pt-2 font-ebgaramond text-xl font-[400] text-slate-700 md:pt-6 md:text-2xl md:font-[400] md:leading-tight">
                  On July 21st, 2022.
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* 
        Hero Image 
        We should be able to change / hide this based on route
        */}
        <div className="relative hidden md:block md:pb-12">
          <div className="mx-auto flex max-w-5xl justify-center rounded-2xl border-2 border-blue-800 px-0 shadow-xl sm:px-0">
            <img
              className="relative rounded-none border-2 border-white opacity-100 brightness-[120%] contrast-[100%] saturate-[125%] md:rounded-2xl md:shadow-gray-400/70"
              src="/origin-wines-location-styled-2.png"
              alt="The Happy Couple — Cole and Mel"
            />
          </div>
        </div>
      </div>

      <div className="relative block p-0 md:hidden md:pb-12">
        <div className="mx-auto flex max-w-xl justify-center p-0 px-0 sm:px-6">
          <img
            className="relative rounded-none opacity-70 shadow-lg brightness-125 contrast-100 saturate-0 md:rounded-xl md:shadow-lg md:shadow-gray-400/70"
            src="/origin-wines-styled-mobile.png"
            alt="The Happy Couple — Cole and Mel"
          />
        </div>
      </div>

      {/* 
      Page Body Copy
       */}
      <div className="relative">
        <p className="mx-auto mt-8 max-w-md px-6 text-center font-ebgaramond text-2xl leading-snug text-gray-600 sm:px-6 sm:text-lg md:mt-8 md:max-w-3xl md:text-center md:text-3xl md:leading-relaxed">
          Origin Wines is located on the shores of the beautiful Lake Okanagan,
          just minutes away from Pentiction.
        </p>
        <article className="my-4 mx-auto max-w-5xl items-center justify-around space-y-1 text-center">
          <div className="md:w-3/3 py-4">
            <p className="font-serif text-2xl font-[400] uppercase leading-snug tracking-widest text-gray-600 sm:px-1 sm:text-lg md:mt-8 md:text-2xl md:leading-normal">
              <span className="border-b-2 border-dotted border-b-slate-300">
                Address
              </span>
            </p>
            <p className="mx-auto mt-4 max-w-md py-2 font-ebgaramond text-5xl font-[400] italic leading-snug text-gray-600 sm:px-6 sm:text-lg md:mt-2 md:max-w-3xl md:text-center md:text-5xl md:leading-tight">
              1268 Riddle Rd
              <br />
              Penticton, BC
              <br />
              V2A 8X2
            </p>
          </div>

          <div className="md:w-3/3 flex flex-col justify-around space-y-1 border-dotted border-slate-300 px-4  md:space-y-2 md:py-10">
            <p className="pb-4">
              <span className="text-md border-b border-dotted border-b-slate-300 font-serif uppercase tracking-wide md:text-lg ">
                View On:
              </span>
            </p>
            <p className="text-base leading-snug tracking-tight md:text-2xl md:leading-relaxed">
              <Link href="https://goo.gl/maps/TaGZJkaEBTBfEyJ5A">
                <a className="border-b-0 border-dotted border-b-indigo-300/50 font-serif font-[600] text-indigo-900">
                  Google Maps
                </a>
              </Link>
            </p>
            <p className="text-base leading-snug tracking-tight md:text-2xl md:leading-relaxed">
              <Link href="  https://maps.apple.com/?address=1278%20Riddle%20Rd,%20Penticton%20BC%20V2A%208X2,%20Canada&auid=14293514979113012970&ll=49.538518,-119.561540&lsp=9902&q=Origin%20Wines&_ext=CjIKBAgEEGIKBAgFEAMKBQgGEIABCgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKQN9fflaxEhAMSdZF6xh5F3AOYFSo1WBxUhAQYNZ2N5+413AUAM%3D">
                <a className="border-b-0 border-dotted border-b-indigo-300/50 font-serif font-[600] text-indigo-900">
                  Apple Maps
                </a>
              </Link>
            </p>
          </div>
          <div className="mx-auto max-w-md justify-center py-6 px-6 font-ebgaramond text-2xl italic text-gray-600 sm:px-6 sm:text-lg md:mt-8 md:max-w-3xl md:text-center md:text-2xl">
            <div className="mx-auto mt-12 border-2 border-slate-400 bg-gradient-to-tr from-blue-900/0 via-slate-100/0 to-slate-200/0 px-4 py-4 text-left leading-relaxed shadow-md md:border-[2px] md:px-6 md:py-6">
              <span className="md:text-md block pb-3 font-fraunces text-2xl font-[800] not-italic">
                Reminder
              </span>
              Please
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdcnsp-SaZPPtPfvHZRtf9imzzwRsCkmNVFDESI4OWoqNwDLQ/viewform">
                <a
                  className="mx-1 border-b border-indigo-300 font-playfair font-[400] tracking-wide text-sky-800 duration-300 hover:border-rose-300/70 
                  hover:text-pink-700  md:border-b
                  md:px-0.5 md:leading-loose"
                >
                  R.S.V.P.
                </a>
              </Link>{" "}
              as soon as possible if you haven{"'"}t already done so.
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
