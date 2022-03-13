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
        <div className="not-prose">
          <h3 className="mt-8 font-serif text-4xl font-bold text-center text-blue-900 capitalize">
            Cole & Mel are getting married
          </h3>
        </div>
        <p className="text-center">
          Join them in beautiful Penticton, B.C. in 2022 to celebrate their
          amazing day. Use the links below to find out more information about
          the happy couple and the event.
        </p>
        <div className="my-12 text-center">
          <button className="py-2 px-3 w-48 font-sans text-xl font-semibold tracking-wider text-rose-600  hover:text-sky-800 bg-sky-50/50 hover:bg-sky-100/50 rounded-md border-2 border-sky-300 hover:border-sky-600 shadow-md transition-all duration-300">
            RSVP
          </button>
        </div>
      </section>
    </>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
