// import Image from "next/image";
import Link from "next/link";
import { getLayout } from "@/layouts/HeroLayout";

type Props = {
  children: React.ReactElement;
};

function HeroComponentLayout({
  imageSrc,
  children,
}: { imageSrc: string } & Props) {
  return (
    <div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-72 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          // src="/cole-and-mel-hero.jpeg"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2  text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          {children}
        </div>
      </div>
    </div>
  );
}

const IndexPage = () => {
  return (
    <HeroComponentLayout imageSrc="/cole-and-mel-hero.jpeg">
      <main className="mx-auto mt-0 max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12 md:pt-16 lg:px-8 lg:pt-20 xl:pt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Cole and Mel are</span>{" "}
            <span className="block text-sky-700 xl:inline">
              getting married.
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
            We are so excited for you to join us on July 21st 2022 at Origin
            Wines in Penticton, British Columbia to celebrate our special day.
            Please use the link below to RSVP at your earliest convenience.
            Check back soon for more information about the {"day's"} events.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdcnsp-SaZPPtPfvHZRtf9imzzwRsCkmNVFDESI4OWoqNwDLQ/viewform">
                <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-500 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
                  RSVP
                </a>
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link href="mailto:cole_savage@hotmail.com">
                <a className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 py-3 px-8 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </HeroComponentLayout>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
