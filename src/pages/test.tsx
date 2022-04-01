// import Image from "next/image";

import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { getLayout } from "@/layouts/TestLayout";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

type Props = {
  children: React.ReactElement;
};

function Test() {
  return (
    <div className="relative z-20 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10">
          <Popover>
            <div className="relative top-0 px-4 py-6 shadow-xl shadow-slate-900/10  sm:px-6 lg:px-8 lg:shadow-none">
              <nav
                className="relative flex items-center justify-between sm:h-8 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex shrink-0 grow items-center lg:grow-0">
                  <div className="flex w-full items-center justify-between pl-1 md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="relative inset-y-0 z-50 h-12 w-auto py-1  lg:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      />
                    </a>
                    <div className="-mr-0 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-8 w-8" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Log in
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-in"
              enterFrom="opacity-0 scale-100"
              enterTo="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-100"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 origin-top-right -translate-x-0 transition md:hidden"
              >
                <div className="overflow-hidden  bg-white/90 shadow-xl shadow-gray-900/20 ring-1 ring-black/5 backdrop-blur-lg">
                  <div className="flex items-center justify-between px-4 pt-6">
                    <div>
                      <img
                        className="absolute inset-y-0 z-50 hidden h-full w-auto py-1 lg:relative lg:inset-y-0 lg:h-10"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="mr-0">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-8 w-8" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-2 space-y-2 px-2 pt-6 pb-5">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md py-2 px-3 text-2xl font-semibold text-gray-700 hover:bg-gray-50/0 hover:text-indigo-600"
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
        <div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-72 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
          <div className="absolute top-0 hidden h-full bg-white pb-8 sm:pb-16 md:pb-20 lg:block lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <svg
              className="absolute inset-y-0 right-0  h-full w-72 translate-x-1/2 pl-0 text-white"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <filter
                  x="25%"
                  y="0%"
                  width="200%"
                  height="200%"
                  filterUnits="objectBoundingBox"
                  id="shadow-filter"
                >
                  <feOffset
                    dx="3"
                    dy="1"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  />
                  <feGaussianBlur
                    stdDeviation="2"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  />
                  <feColorMatrix
                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"
                    in="shadowBlurOuter1"
                    type="matrix"
                    result="shadowMatrixOuter1"
                  />
                  <feMerge>
                    <feMergeNode in="shadowMatrixOuter1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* <polygon points="50,0 100,0 50,100 0,100" /> */}
              {/* <polygon points="50,0 50,0 100,100 50,100" /> */}
              <polygon
                points="20,0 50,0 80,100 30,100"
                filter="url(#shadow-filter)"
              />
            </svg>
          </div>
        </div>
        <div className="relative bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Data to enrich your</span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  online business
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 py-3 px-8 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

Test.getLayout = getLayout;

export default Test;
