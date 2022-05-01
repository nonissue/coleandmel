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
        <div className="relative pt-6 pb-16 sm:pb-12 md:mt-0">
          <div className="mx-auto mt-6 max-w-5xl px-4 text-center sm:px-6 md:mt-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
              <span className="block font-serif xl:inline">Gifts</span>{" "}
            </h1>

            <p className="mt-3 font-serif text-xl italic leading-loose text-gray-900 sm:mx-auto sm:mt-5 sm:max-w-7xl sm:text-lg md:mt-5 md:text-3xl md:leading-normal lg:mx-0">
              Since we’re moving away, and packing’s such a chore, We don’t have
              a registry; for us, less is more. <br /> We know it’s not
              traditional, it isn’t “how it’s done”, But instead of pots and
              pans, we’d like to have some fun! <br /> So if you’d like to give
              a gift to help us celebrate, Some help toward our honeymoon, we’d
              sure appreciate!
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl px-4 font-serif  sm:px-6 md:mt-10">
            <p className="text-xl">
              We would appreciate any gifts you are wanting to give in CAD or
              AED. Below are a list of some adventures we would put the gifts
              towards! Think of it as an adventure registry :)
            </p>
            <ul className="my-4 text-lg ">
              <li>
                {" - "}
                <Link href="https://www.louvreabudhabi.ae/">
                  <a className="text-rose-700 underline">
                    The Louvre in Abu Dhabi
                  </a>
                </Link>
              </li>
              <li>
                {" - "}
                <Link href="https://www.atlasobscura.com/places/ferrari-world">
                  <a className="text-rose-700 underline">Ferrari world</a>
                </Link>
              </li>
              <li>
                {" - "}
                <Link href="https://visitabudhabi.ae/en/things-to-do/desert-and-outdoor-activities/sandboarding">
                  <a className="text-rose-700 underline">
                    Sandboarding and Off-roading
                  </a>
                </Link>
              </li>
              <li>
                {" - "}
                <Link href="https://www.platinum-heritage.com/bedouin-culture-safari">
                  <a className="text-rose-700 underline">
                    Desert Safari and perhaps learn to use falcons
                  </a>
                </Link>
              </li>
              <li>
                {" - "}
                <Link href="https://www.dubaiopera.com/">
                  <a className="text-rose-700 underline">
                    Help Cole get some classes at the Dubai Opera
                  </a>
                </Link>
              </li>
              <li>
                {" - "}
                <Link href="http://www.atmosphereburjkhalifa.com/">
                  <a className="text-rose-700 underline">
                    A dining experience in the worlds tallest restaurant on the
                    122 floor of the Burj Khalifa
                  </a>
                </Link>
              </li>
            </ul>
            Or if you find anything let us know! We are hoping there are many
            adventures to be had on our UAE honey moon
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
