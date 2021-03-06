/* eslint-disable @next/next/no-img-element */

import Image from "next/future/image";
// import heromin from "../../public/images/heromin.jpg";
import { GridBg, Nav, RSVPReminder } from "src/components";

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
                <span className="block font-fraunces text-7xl font-[900] italic tracking-tight text-blue-900 md:text-8xl">
                  getting married.
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* 
        Hero Image 
        */}
        <div className="relative md:pb-12">
          <div className="mx-auto  flex min-w-full max-w-5xl justify-center px-0 sm:px-6">
            <Image
              src="/images/cole-and-mel-hero-min.webp"
              priority
              // src={heromin}
              alt="The Happy Couple — Cole and Mel"
              // sizes="(max-width: 600px) 600px, 1152px"
              height={768}
              width={1152}
              // placeholder="blur"
              className="relative max-w-lg rounded-none shadow-lg md:max-w-6xl md:rounded-xl md:shadow-lg md:shadow-gray-400/70"
            />
          </div>
        </div>

        {/* <div className="mx-auto flex min-w-full max-w-5xl justify-center px-0 sm:px-6 md:hidden">
          <Image
            src="/cole-and-mel-hero-min.jpeg"
            alt="The Happy Couple — Cole and Mel"
            sizes="64rem"
            height={1200}
            width={800}
            className="relative max-w-lg rounded-none shadow-lg md:max-w-6xl md:rounded-xl md:shadow-lg md:shadow-gray-400/70"
          />
        </div> */}
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
        {/* <div className="mx-auto mt-8 flex max-w-md justify-center py-6 px-6 font-sans text-2xl text-gray-600 sm:px-6 sm:text-lg md:mt-8 md:max-w-3xl md:text-center md:text-3xl">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdcnsp-SaZPPtPfvHZRtf9imzzwRsCkmNVFDESI4OWoqNwDLQ/viewform">
            <a className="border-b-2 border-dotted border-b-blue-900/20 bg-transparent py-1 font-fraunces text-2xl font-bold tracking-wider text-blue-900 duration-300 hover:border-b-rose-200  hover:text-rose-800 md:border-b-2 md:py-2 md:px-0 md:text-5xl">
              R.S.V.P.
            </a>
          </Link>
        </div> */}
        <RSVPReminder />
      </div>
    </div>
  );
}
