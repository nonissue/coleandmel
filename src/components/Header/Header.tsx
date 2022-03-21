/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "RSVP", href: "/rsvp" },
  { name: "Schedule", href: "/schedule" },
];

const Header = () => {
  return (
    <div className="relative bg-white z-20 ">
      <Popover>
        <div className="relative px-4 pt-6 pb-6 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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

                <div className="flex items-center -mr-2 md:hidden">
                  <Popover.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 bg-white hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>

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
        </Transition>
      </Popover>
    </div>
  );
};

export { Header };
