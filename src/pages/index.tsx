import { NextPage } from "next/types";
import Image from "next/image";
// import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <>
      <section className="prose prose-lg lg:prose-xl dark:prose-dark ">
        <h2 className="hidden text-lightRadixTomato-tomato10 capitalize">
          Cole & Mel are getting married!
        </h2>
        <Image src="/okanagan-valley.jpg" width={800} height={534} />{" "}
        <p>
          Join them in beautiful Penticton, B.C. in 2021 to celebrate their
          amazing day. Use the links below to find out more information about
          the happy couple and the event.
        </p>
        <p className="hidden">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
          egestas pretium aenean pharetra. Orci eu lobortis elementum nibh
          tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra
          vel turpis nunc. Malesuada nunc vel risus commodo. Nisi vitae suscipit
          tellus mauris. Posuere morbi leo urna molestie at elementum eu. Urna
          duis convallis convallis tellus. Urna molestie at elementum eu. Nunc
          sed blandit libero volutpat.
        </p>
      </section>
    </>
  );
};

IndexPage.getLayout = getLayout;

export default IndexPage;
