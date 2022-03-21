import { NextPage } from "next/types";
// import Image from "next/image";
// import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const ItineraryPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <main className="px-4 mx-auto mt-10 max-w-7xl sm:px-6 sm:mt-12 md:mt-16 lg:px-8 lg:mt-20 xl:mt-28">
      <h1>Schedule Page</h1>
    </main>
  );
};

ItineraryPage.getLayout = getLayout;

export default ItineraryPage;
