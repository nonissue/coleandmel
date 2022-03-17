/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "RSVP", href: "#" },
  { name: "Schedule", href: "#" },
];

const Header2 = () => {
  return (
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
      <svg
        className="hidden absolute inset-y-0 right-0 w-48 h-full text-white translate-x-1/2 lg:block"
        fill="currentColor"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="50,0 100,0 50,100 0,100" />
      </svg>
      <Popover>
        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav
            className="flex relative justify-between items-center sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex grow shrink-0 items-center lg:grow-0">
              <div className="flex justify-between items-center w-full md:w-auto">
                <Link href="/">
                  <a className="text-2xl tracking-normal">
                    <span className="font-sans font-medium ">Cole</span>
                    <span className="font-display2 text-sky-500 ">&</span>
                    <span className="font-sans font-medium">Mel </span>
                  </a>
                </Link>
                {false && (
                  <div className="flex items-center -mr-2">
                    <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                )}
              </div>
            </div>
            {false && (
              <div className="hidden md:block md:pr-4 md:ml-10 md:space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {false && (
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right md:hidden"
            >
              <div className="overflow-hidden bg-white rounded-lg ring-1 ring-black/5 shadow-md">
                <div className="flex justify-between items-center px-5 pt-4">
                  <Link href="/">
                    <a className="text-2xl tracking-normal">
                      <span className="font-sans font-medium ">Cole</span>
                      <span className="font-display2 text-sky-500 ">&</span>
                      <span className="font-sans font-medium">Mel </span>
                    </a>
                  </Link>

                  <div className="-mr-2">
                    <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          )}
        </Transition>
      </Popover>
      <main className="px-4 mx-auto mt-10 max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Cole and Mel are</span>{" "}
            <span className="block text-sky-700 xl:inline">
              getting married.
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            Join them in beautiful Penticton, B.C. on July 21st, 2022 at Origin
            Wines to celebrate their amazing day. Use the links below to find
            out more information about the happy couple and the event.
          </p>
          <div className="mt-5 sm:flex sm:justify-center sm:mt-8 lg:justify-start">
            <div className="rounded-md shadow">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdcnsp-SaZPPtPfvHZRtf9imzzwRsCkmNVFDESI4OWoqNwDLQ/viewform">
                <a className="flex justify-center items-center py-3 px-8 w-full text-base font-medium text-white bg-pink-500 hover:bg-indigo-700 rounded-md border border-transparent md:py-4 md:px-10 md:text-lg">
                  RSVP
                </a>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="mailto:cole_savage@hotmail.com">
                <a className="flex justify-center items-center py-3 px-8 w-full text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 rounded-md border border-transparent md:py-4 md:px-10 md:text-lg">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export { Header2 };
