import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "RSVP", href: "/rsvp" },
  { name: "The Special Day", href: "/thedayof" },
  { name: "Location", href: "/location" },
  { name: "Gifts", href: "/gifts" },
];

const LogoText = () => {
  return (
    <Link href="/">
      <a className="font-ebgaramond text-2xl text-gray-900">
        <span className=" font-[400] text-almostblack">Cole</span>
        <span className="font-fraunces font-light text-gray-600">{"&"}</span>
        <span className="font-[400] text-almostblack">Mel</span>
      </a>
    </Link>
  );
};

type NavMenuProps = {
  showLogo: boolean;
};

export const NavMenu = ({ showLogo }: NavMenuProps) => {
  return (
    <div className="py-2">
      <Popover>
        <div className="mx-auto max-w-7xl px-6 sm:px-6">
          <nav
            className="relative flex items-center justify-between sm:h-10 md:mt-2 md:mb-8 md:flex-col md:justify-center md:space-y-0"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center md:inset-y-0 ">
              {showLogo ? (
                <div className="mt-4 flex w-full items-center justify-between md:mt-12 md:w-auto ">
                  <span className="sr-only">
                    Cole and Mel are getting married!
                  </span>

                  <LogoText />

                  <div className="-mr-0 flex items-center md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md border-2 border-gray-200 bg-gray-50 p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              ) : (
                <div className="mt-4 flex w-full items-center justify-between md:mt-8 md:hidden md:w-auto">
                  <span className="sr-only">
                    Cole and Mel are getting married!
                  </span>

                  <LogoText />

                  <div className="-mr-0 flex items-center md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md border-2 border-gray-200 bg-gray-50 p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              )}
            </div>
            <div className="hidden font-playfair text-xl md:flex md:space-x-10 md:pt-4">
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

        {/* This is just the mobile pop up nav panel */}
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
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <LogoText />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
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
