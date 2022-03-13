import { NextPage } from "next/types";
// import Image from "next/image";
// import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const ItineraryPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section>
      <h1>Schedule Page</h1>
    </section>
  );
};

ItineraryPage.getLayout = getLayout;

export default ItineraryPage;
