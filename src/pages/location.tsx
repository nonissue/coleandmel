/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import { GridBg, Nav, RSVPReminder } from "@/components";

export default function Example() {
  return (
    <div className="bg-gray-50 pb-16">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <GridBg />
        {/* Hero Nav */}

        <Nav showLogo={true} />

        {/* Hero Copy */}
        <div className="relative pt-4 pb-12 sm:pb-8 md:mt-8">
          <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 md:mt-0">
            <div className="text-center">
              <h1 className="space-y-0 text-4xl tracking-normal text-gray-800 sm:text-5xl md:mb-12 md:pt-8 md:text-6xl md:leading-tight">
                <span className="block pb-2 font-ebgaramond text-2xl font-[400] uppercase  tracking-widest text-slate-700 md:text-3xl">
                  Join us at
                </span>
                <span className="block font-fraunces text-8xl font-[900] tracking-tight text-blue-900 md:text-8xl">
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
        <div className="relative hidden sm:mx-2 md:block md:pb-12">
          <div className="mx-auto flex max-w-5xl justify-center rounded-2xl border-2 border-sky-800/25 px-0 shadow-xl sm:px-0">
            <img
              className="relative rounded-none border-4 border-white brightness-125 hue-rotate-[-25deg] saturate-100 md:rounded-2xl md:shadow-gray-400/70"
              // src="/origin-wines-location-styled-2.png"
              src="/origin-wines-location-styled.png"
              alt="The Happy Couple — Cole and Mel"
            />
          </div>
        </div>
      </div>

      <div className="relative block p-0 md:hidden md:pb-12">
        <div className="mx-auto flex max-w-xl justify-center p-0 px-0 sm:px-6">
          <img
            className="relative rounded-none opacity-90 shadow-lg brightness-125 hue-rotate-[-25deg] saturate-100 md:rounded-xl md:shadow-lg md:shadow-gray-400/70"
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
                <a className="border-b-0 border-b-blue-300/50 font-serif font-[600] text-blue-900 hover:text-rose-700 hover:underline">
                  Google Maps
                </a>
              </Link>
            </p>
            <p className="text-base leading-snug tracking-tight md:text-2xl md:leading-relaxed">
              <Link href="https://maps.apple.com/?address=1278%20Riddle%20Rd,%20Penticton%20BC%20V2A%208X2,%20Canada&auid=14293514979113012970&ll=49.538518,-119.561540&lsp=9902&q=Origin%20Wines&_ext=CjIKBAgEEGIKBAgFEAMKBQgGEIABCgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKQN9fflaxEhAMSdZF6xh5F3AOYFSo1WBxUhAQYNZ2N5+413AUAM%3D">
                <a className="border-b-0 border-b-blue-300/50 font-serif font-[600] text-blue-900 hover:text-rose-700 hover:underline">
                  Apple Maps
                </a>
              </Link>
            </p>
          </div>
          <RSVPReminder />
        </article>
      </div>
    </div>
  );
}
