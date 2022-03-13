import { Fragment, useRef } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { HeaderPopover } from "@/components";
import SiteConfig from "@/data/site.config.json";

const Header = () => {
  // use buttonRef to close popover when menu link is tapped/clicked
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonClick = () => buttonRef.current?.click();

  return (
    <Popover as="header" className="relative z-10 mt-4">
      {({ open }) => (
        <div className={`relative z-20`}>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 "
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay
              static
              className={`${"bg-white/80 dark:bg-almostblack/80 fixed inset-0 "}`}
            />
          </Transition>
          <div className="relative inset-0 z-20">
            <div className="flex inset-0 py-2 px-6 mx-auto max-w-3xl sm:px-6 lg:py-2 lg:px-8 ">
              <div className="flex absolute inset-0" aria-hidden="true"></div>

              <div className="flex relative justify-between items-center w-full">
                <div className="grow font-display text-3xl ">
                  <Link href="/">
                    <a className="tracking-normal">
                      <span className=" font-serif font-bold ">Cole</span>
                      <span className="font-display2 text-rose-700 ">&</span>
                      <span className="font-serif font-bold">Mel</span>
                    </a>
                  </Link>
                </div>

                {/* <ThemeChanger /> */}

                <Popover.Button
                  ref={buttonRef}
                  aria-label="Navigation Toggle"
                  className="p-2 text-slate-600 hover:text-red-300 dark:text-slate-300 dark:hover:text-red-400 bg-slate-100 dark:bg-gray-800 rounded-full transition-all
                      duration-200"
                  id="toggle-popover"
                >
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className=" block w-6 h-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
            </div>
          </div>

          {/* Pass closePopover function to panel */}
          <HeaderPopover
            open={open}
            closePopover={buttonClick}
            data={SiteConfig}
          />
        </div>
      )}
    </Popover>
  );
};

export { Header };
