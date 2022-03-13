import { NextPage } from "next/types";
// import Image from "next/image";
// import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const TheCouplePage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section>
      <h1>About the Couple</h1>
    </section>
  );
};

TheCouplePage.getLayout = getLayout;

export default TheCouplePage;
