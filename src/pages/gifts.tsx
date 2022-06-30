/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */

import Link from "next/link";
import { NavMenu } from "src/components/Version2/Nav";
import { GiftIllustrationSVG } from "src/components/Version2/GiftIllustrationSVG";
import { RSVPReminder } from "@/components";

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
        <div className="mx-auto max-w-4xl px-4">
          <article className="prose relative mx-auto max-w-5xl px-4 pt-0 pb-16 prose-p:font-serif prose-ul:font-fraunces sm:pb-12 md:mt-0">
            <div className="not-prose relative">
              <div className="mx-auto flex justify-center  py-12 px-0 sm:px-6">
                <GiftIllustrationSVG scale={0.5} />
              </div>
            </div>
            <h2 className="mt-0 pt-0 text-center font-fraunces text-3xl md:text-4xl">
              Gifts
            </h2>

            <span className="prose mx-auto mb-20 block max-w-2xl text-center text-3xl italic leading-relaxed prose-p:font-serif md:mb-16 md:text-3xl md:leading-relaxed">
              <p>
                Since we’re moving away, and packing’s such a chore, We don’t
                have a registry; for us, less is more.
              </p>
              <p>
                We know it’s not traditional, it isn’t “how it’s done”, But
                instead of pots and pans, we’d like to have some fun!
              </p>
              <p>
                So if you’d like to give a gift to help us celebrate, Some help
                toward our honeymoon, we’d sure appreciate!
              </p>
            </span>

            <p className="not-prose mx-auto mt-0 pt-0 text-2xl leading-relaxed md:text-center md:text-2xl md:leading-relaxed">
              We would appreciate any gifts you want to give to be in the form
              of cash (
              <span className="font-serif text-xl font-semibold">CAD</span>{" "}
              or&nbsp;
              <span className="font-serif text-xl font-semibold">AED</span>).
              Below are a list of some adventures we would put the gifts
              towards! <br />
              <br />
              Think of it as an adventure registry!
            </p>
            <ul className="not-prose unstyled-list tracking-loose my-4 max-w-xl pl-0 text-xl font-semibold leading-relaxed md:text-center md:text-2xl md:leading-relaxed">
              <li>
                <Link href="https://www.louvreabudhabi.ae/">
                  <a className="text-indigo-900 ">The Louvre in Abu Dhabi</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.atlasobscura.com/places/ferrari-world">
                  <a className="text-indigo-900 ">Ferrari world</a>
                </Link>
              </li>
              <li>
                <Link href="https://visitabudhabi.ae/en/things-to-do/desert-and-outdoor-activities/sandboarding">
                  <a className="text-indigo-900 ">
                    Sand-boarding + Off-roading
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.platinum-heritage.com/bedouin-culture-safari">
                  <a className="text-indigo-900 ">
                    Desert Safari and perhaps learn to use falcons
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.dubaiopera.com/">
                  <a className="text-indigo-900 ">
                    Help Cole get some classes at the Dubai Opera
                  </a>
                </Link>
              </li>
              <li>
                <Link href="http://www.atmosphereburjkhalifa.com/">
                  <a className="text-indigo-900 ">
                    A dining experience in the worlds tallest restaurant!
                  </a>
                </Link>
              </li>
            </ul>
            <p className="mx-auto max-w-2xl text-lg md:text-center">
              If you find anything else, please
              <Link href="mailto:cole_savage@hotmail.com">
                <a className="text-slate-500 "> let us know!</a>
              </Link>
              We are hoping there are many adventures to be had on our UAE honey
              moon.
            </p>
          </article>
        </div>
        <RSVPReminder />
      </div>
    </div>
  );
}
