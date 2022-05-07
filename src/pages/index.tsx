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
        <NavMenu showLogo={false} />

        {/* Hero Copy */}
        <div className="relative pt-6 pb-16 sm:pb-12 md:mt-0">
          <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 md:mt-0">
            <div className="text-center">
              <h1 className="space-y-0 text-4xl tracking-normal text-gray-800 sm:text-5xl md:mb-12 md:text-6xl md:leading-normal">
                <span className="block font-ebgaramond text-4xl font-[400] leading-loose text-gray-900 md:text-6xl md:leading-tight">
                  Cole and Mel are
                </span>
                <span className="block font-fraunces text-7xl font-[900] italic tracking-tight text-indigo-800 md:text-8xl">
                  getting married.
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* 
        Hero Image 
        We should be able to change / hide this based on route
        */}
        <div className="relative md:pb-12">
          <div className="mx-auto flex max-w-7xl justify-center px-0 sm:px-6">
            <img
              className="relative rounded-none shadow-lg md:rounded-xl md:shadow-lg md:shadow-gray-400/70"
              src="/cole-and-mel-hero.jpeg"
              alt="The Happy Couple — Cole and Mel"
            />
          </div>
        </div>
      </div>

      {/* 
      Page Body Copy
       */}
      <div className="relative">
        <p className="mx-auto mt-8 max-w-md px-6 font-ebgaramond text-2xl leading-snug text-gray-600 sm:px-6 sm:text-lg md:mt-8 md:max-w-3xl md:text-center md:text-3xl md:leading-relaxed">
          We are so excited for you to join us on July 21st 2022 at Origin Wines
          in Penticton, British Columbia to celebrate our special day. Please
          use the link below to RSVP at your earliest convenience.
        </p>
        <div className="mx-auto mt-8 flex max-w-md justify-center py-6 px-6 font-sans text-2xl text-gray-600 sm:px-6 sm:text-lg md:mt-8 md:max-w-3xl md:text-center md:text-3xl">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdcnsp-SaZPPtPfvHZRtf9imzzwRsCkmNVFDESI4OWoqNwDLQ/viewform">
            <a className="border-b-2 border-b-indigo-700/50 bg-transparent py-2 font-playfair text-2xl font-bold tracking-wider text-indigo-700 duration-300 hover:border-b-indigo-200  hover:text-indigo-400 md:border-b-4 md:py-2 md:px-0 md:text-5xl">
              R.S.V.P.
            </a>
          </Link>
        </div>
      </div>
      {/* <div className="bg-gray-50/0">
        <div className="mx-auto max-w-7xl py-16 px-8 sm:py-24 sm:px-6 lg:px-8">
          <h2 className=" text-sm font-semibold uppercase tracking-wide text-gray-400">
            Details
          </h2>
        </div>
      </div> */}
    </div>
  );
}
