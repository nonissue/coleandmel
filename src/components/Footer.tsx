import Link from "next/link";

const Footer = () => {
  return (
    <div className="static bottom-0 z-0 mx-auto mb-8 flex max-w-3xl flex-col justify-start px-6 md:px-8">
      <div className="border-0 border-gray-300 text-center font-sans font-light leading-relaxed text-almostblack opacity-25 transition-opacity duration-300 hover:opacity-75 dark:border-gray-600  dark:text-gray-50 ">
        <span className="text-xs">
          site by{" "}
          <Link href="https://andy.ws">
            <a className="font-semibold underline">andy</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export { Footer };
