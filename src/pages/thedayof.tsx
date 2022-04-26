import { NextPage } from "next/types";
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
      <div className="lg:absolute lg:right-0 lg:w-1/2">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="h-72 w-full object-cover sm:h-72 md:h-96 lg:h-96 lg:w-full"
          // src="/cole-and-mel-hero.jpeg"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-8 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
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

const LocationPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <div className="space-y-8">
      <HeroComponentLayout imageSrc="/origin-wines-wedding.jpg">
        <main className="mx-auto mt-0 max-w-7xl space-y-8 px-4 pt-10 sm:px-6 sm:pt-12 md:pt-16 lg:px-8 lg:pt-20 xl:pt-28">
          <div className="text-left lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">The Special Day</span>{" "}
            </h1>

            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-7xl sm:text-lg md:mt-5 md:text-3xl md:leading-normal lg:mx-0"></p>
          </div>
        </main>
      </HeroComponentLayout>
      <div className="min-h-48 relative z-50 mx-auto mt-0 max-w-7xl bg-white px-4 pt-0 sm:px-6 sm:pt-0 md:pt-0 lg:px-8 lg:pt-8 xl:pt-8">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:py-4 md:text-2xl">
          Schedule
        </h3>
        <p className="text-lg">
          We will be sharing our finalized schedule soon, stay tuned!
        </p>
      </div>
      <div className="min-h-48 relative z-50 mx-auto mt-0 max-w-7xl bg-white px-4 pt-0 sm:px-6 sm:pt-0 md:pt-0 lg:px-8 lg:pt-8 xl:pt-8">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:py-4 md:text-2xl">
          Etiquette
        </h3>
        <p className="text-lg">
          During the ceremony, we ask that guests refrain from taking and
          posting photos on social media. We have a wonderful photographer who
          will be chronicling the event!
        </p>
      </div>
      <div className="min-h-48 relative z-50 mx-auto mt-0 h-48 max-w-7xl bg-white px-4 pt-0 sm:px-6 sm:pt-0 md:pt-0 lg:px-8 lg:pt-8 xl:pt-8">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-2xl">
          Directions
        </h3>
      </div>
    </div>
  );
};

LocationPage.getLayout = getLayout;

export default LocationPage;
