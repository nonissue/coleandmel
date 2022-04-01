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
          className="object-cover w-full h-72 sm:h-72 md:h-96 lg:w-full lg:h-full"
          // src="/cole-and-mel-hero.jpeg"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-8 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
          <svg
            className="hidden absolute inset-y-0 right-0 w-48 h-full text-white  translate-x-1/2 lg:block"
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
    <div>
      <HeroComponentLayout imageSrc="/origin-wines-wedding.jpg">
        <main className="px-4 pt-10 mx-auto mt-0 space-y-8 max-w-7xl sm:px-6 sm:pt-12 md:pt-16 lg:px-8 lg:pt-20 xl:pt-28">
          <div className="text-left lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Location</span>{" "}
            </h1>

            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-7xl sm:text-lg md:mt-5 md:text-3xl md:leading-normal lg:mx-0">
              We look forward to you joining us at the beautiful Origin Wines in
              Pentiction, B.C.
            </p>
          </div>
        </main>
      </HeroComponentLayout>
      <div className="relative z-50 px-4 pt-0 mx-auto mt-0 space-y-8 max-w-7xl bg-white sm:px-6 sm:pt-0 md:pt-0 lg:px-8 lg:pt-8 xl:pt-8">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-2xl">
          Address
        </h3>
        <p className="pb-8 mt-3 text-base text-gray-500 sm:mx-auto  sm:mt-4 sm:text-lg md:mt-4 md:text-xl lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas pretium aenean pharetra. Orci eu lobortis elementum nibh
          tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra
          vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
          tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
          duis convallis convallis tellus. Urna molestie at elementum eu. Nunc
          sed blandit libero volutpat.
        </p>
      </div>
    </div>
  );
};

LocationPage.getLayout = getLayout;

export default LocationPage;
