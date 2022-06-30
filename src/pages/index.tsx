/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */

import Link from "next/link";
import { Nav } from "src/components/Nav";
import { GridBg } from "src/components";

export default function Index() {
  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <GridBg />
        {/* Hero Nav */}
        <Nav showLogo={false} />

        {/* Hero Copy */}
        <div className="relative pt-6 pb-16 sm:pb-12 md:mt-0">
          <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 md:mt-0">
            <div className="text-center">
              <h1 className="space-y-0 text-4xl tracking-normal text-gray-800 sm:text-5xl md:mb-12 md:text-6xl md:leading-normal">
                <span className="block font-ebgaramond text-4xl font-[400] leading-loose text-gray-900 md:text-6xl md:leading-tight">
                  Cole and Mel are
                </span>
                <span className="block font-fraunces text-7xl font-[900] italic tracking-tight text-sky-800 md:text-8xl">
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
            <a className="border-b-2 border-b-sky-200/50 bg-transparent py-2 font-playfair text-2xl font-bold tracking-wider text-sky-600 duration-300 hover:border-b-indigo-200  hover:text-indigo-400 md:border-b-4 md:py-2 md:px-0 md:text-5xl">
              R.S.V.P.
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
