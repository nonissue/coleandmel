import { NextPage } from "next/types";
import Image from "next/image";
// import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <>
      <section className="pt-0 mt-0 prose prose-lg dark:prose-dark lg:prose-xl ">
        <div className="relative w-[100%] h-[190px] rounded-xl shadow-xl sm:h-[300px]">
          <Image
            src="/cole-and-mel.jpeg"
            layout="fill"
            alt="Cole & Mel"
            width="240.2px"
            height="189.6px"
            objectFit="cover"
            className="rounded-xl"
            objectPosition={"top"}
          />
        </div>
        {/* <h3 className="not-prose mt-4 font-serif text-sm font-bold text-blue-900 capitalize"> */}
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <div className="flex flex-col justify-between mt-8 not-prose">
          <h3 className=" flex items-center my-0 font-serif text-4xl italic font-bold leading-tight text-rose-900 capitalize sm:text-6xl">
            Cole & Mel are getting married
          </h3>
        </div>
        <p className="font-sans">
          Join them in beautiful Penticton, B.C. in 2022 to celebrate their
          amazing day. Use the links below to find out more information about
          the happy couple and the event.
        </p>
        <button className="py-2 px-12 mt-4 w-full text-sm font-bold text-slate-100 bg-rose-700 hover:bg-sky-900 rounded-lg border-2 border-rose-900 shadow-xl transition-all duration-500 sm:py-4 sm:px-24 sm:text-3xl">
          RSVP
        </button>
        <div className="inset-x-0 bottom-6 my-2 mt-4 w-full text-left sm:static">
          {/* <button className="py-2 px-3 w-48 font-sans text-xl font-semibold tracking-wider text-rose-600  hover:text-sky-800 bg-sky-50/50 hover:bg-sky-100/50 rounded-md border-2 border-sky-300 hover:border-sky-600 shadow-md transition-all duration-300">
            RSVP
          </button> */}
        </div>
      </section>
    </>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
