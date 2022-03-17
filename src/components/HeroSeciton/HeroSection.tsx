/* This example requires Tailwind CSS v2.0+ */
import { Header2 } from "../Header2/Header2";

const HeroSection = () => {
  return (
    <div>
      <div className="overflow-hidden relative shadow-sm bg-white">
        <div className="mx-auto max-w-7xl">
          <Header2 />
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="object-cover w-full h-72 sm:h-96 md:h-96 lg:w-full lg:h-full"
            src="https://coleandmel.com/cole-and-mel3.JPG"
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl"></div>
    </div>
  );
};

export { HeroSection };
