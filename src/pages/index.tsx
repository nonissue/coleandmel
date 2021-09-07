import { NextPage } from "next/types";
import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <>
      <section className="prose prose-lg lg:prose-2xl dark:prose-dark ">
        <p>
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
