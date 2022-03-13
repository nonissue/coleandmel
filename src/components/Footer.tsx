import Link from "next/link";

const Footer = () => {
  return (
    <div className="z-0 bottom-0 static flex flex-col justify-start px-6 md:px-8 max-w-3xl mx-auto mb-8">
      <div className="font-sans font-light leading-relaxed border-0 border-gray-300 bg-opacity-100 text-almostblack opacity-25 hover:opacity-75 transition-opacity duration-300 dark:text-gray-50 dark:border-gray-600  text-center ">
        {/* <span
          role="img"
          aria-label="100 emoji"
          className="h-5 leading-5 text-sm inline-block"
        >
          © coleandmel.com
        </span> */}
        <span className="text-xs">
          site by{" "}
          <Link href="https://andy.ws">
            <a className="underline font-semibold">andy</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export { Footer };
