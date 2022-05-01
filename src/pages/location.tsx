/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */

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
    <div className="bg-white pb-16">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <GridBg />
        {/* Hero Nav */}
        <NavMenu showLogo={true} />

        {/* Hero Copy */}
        <div className="relative pt-6 pb-16 sm:pb-12 md:mt-0">
          <div className="mx-auto mt-6 max-w-7xl px-4 text-center sm:px-6 md:mt-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
              <span className="block font-serif xl:inline">Coming Soon</span>
            </h1>
          </div>
        </div>

        {/* 
        Hero Image 
        We should be able to change / hide this based on route
        */}
      </div>

      {/* 
      Page Body Copy
       */}

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
