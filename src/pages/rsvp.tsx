import { NextPage } from "next/types";
// import Image from "next/image";
// import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const RSVPPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <main className="px-4 mx-auto mt-10 max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Cole and Mel are</span>{" "}
          <span className="block text-sky-700 xl:inline">getting married.</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          We are so excited for you to join us on July 21st 2022 at Origin Wines
          in Penticton, British Columbia to celebrate our special day. Please
          use the link below to RSVP at your earliest convenience. Check back
          soon for more information about the {"day's"} events.
        </p>
      </div>
    </main>
  );
};

RSVPPage.getLayout = getLayout;

export default RSVPPage;
