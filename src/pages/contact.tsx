import { NextPage } from "next/types";
// import Image from "next/image";
// import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const ContactPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section>
      <h1>Contact Page</h1>
      <ul>
        <li>Email</li>
        <li>Contact Details</li>
      </ul>
    </section>
  );
};

ContactPage.getLayout = getLayout;

export default ContactPage;
