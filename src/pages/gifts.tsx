import { NextPage } from "next/types";
// import Image from "next/image";
// import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const GiftsPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section>
      <h1>Gifts Page</h1>
    </section>
  );
};

GiftsPage.getLayout = getLayout;

export default GiftsPage;
