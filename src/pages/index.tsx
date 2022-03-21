// import Image from "next/image";
import Link from "next/link";
import { getLayout } from "@/layouts/HeroLayout";

const IndexPage = () => {
  return (
    <main className="px-4 mx-auto mt-0 pt-10 max-w-7xl sm:px-6 sm:pt-12 md:pt-16 lg:px-8 lg:pt-20 xl:pt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Cole and Mel are</span>{" "}
          <span className="block text-sky-700 xl:inline">getting married.</span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          We are so excited for you to join us on July 21st 2022 at Origin Wines
          in Penticton, British Columbia to celebrate our special day. Please
          use the link below to RSVP at your earliest convenience. Check back
          soon for more information about the {"day's"} events.
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
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
