/* This example requires Tailwind CSS v2.0+ */
import { Header2 } from "../Header2/Header2";

const navigation = [
  { name: "RSVP", href: "#" },
  { name: "Schedule", href: "#" },
];

const HeroSection = () => {
  return (
    <div>
      <div className="overflow-hidden relative shadow-sm">
        <div className="mx-auto max-w-7xl">
          <Header2 />
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover w-full h-72 sm:h-96 md:h-96 lg:w-full lg:h-full"
            src="./cole-and-mel3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl bg"></div>
    </div>
  );
};

export { HeroSection };
