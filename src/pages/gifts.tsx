import { NextPage } from "next/types";
import { getLayout } from "@/layouts/Layout";

type Props = {
  children: React.ReactElement;
};

function HeroComponentLayout({
  imageSrc,
  children,
}: { imageSrc: string } & Props) {
  return (
    <div>
      <div className="hidden lg:absolute lg:right-0 lg:w-1/2">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hidden h-72 w-full object-cover sm:h-72 md:h-96 lg:h-96 lg:w-full"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-8 lg:w-full lg:max-w-7xl lg:pb-28 xl:pb-32">
          <svg
            className="hidde absolute inset-y-0 right-0 hidden h-full w-48  translate-x-1/2 text-white lg:block"
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
              <span className="block xl:inline">Gifts</span>{" "}
            </h1>

            <p className="mt-3  font-serif text-2xl italic leading-loose text-gray-900 sm:mx-auto sm:mt-5 sm:max-w-7xl sm:text-lg md:mt-5 md:text-3xl md:leading-normal lg:mx-0">
              Since we’re moving away, and packing’s such a chore, <br /> We
              don’t have a registry; for us, less is more. <br /> We know it’s
              not traditional, it isn’t “how it’s done”, <br /> But instead of
              pots and pans, we’d like to have some fun! <br /> So if you’d like
              to give a gift to help us celebrate, <br /> Some help toward our
              honeymoon, we’d sure appreciate!
            </p>
          </div>
          <div className="text-left lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-3xl">
              <span className="block xl:inline">Suggestions</span>{" "}
            </h1>

            <p className="mt-3 text-2xl  leading-loose text-gray-900 sm:mx-auto sm:mt-5 sm:max-w-7xl sm:text-lg md:mt-5 md:text-2xl md:leading-normal lg:mx-0">
              If you choose to, you can support us in any of the following ways:
              <ul className="list-disc pl-6">
                <li>Donations</li>
                <li></li>
              </ul>
            </p>
          </div>
        </main>
      </HeroComponentLayout>
    </div>
  );
};

LocationPage.getLayout = getLayout;

export default LocationPage;
