import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex static bottom-0 z-0 flex-col justify-start px-6 mx-auto mb-8 max-w-3xl md:px-8">
      <div className="font-sans font-light leading-relaxed text-center text-almostblack dark:text-gray-50 border-0 border-gray-300 dark:border-gray-600 opacity-25 hover:opacity-75 transition-opacity  duration-300 ">
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
            <a className="font-semibold underline">andy</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export { Footer };
