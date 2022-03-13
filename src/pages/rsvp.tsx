import { NextPage } from "next/types";
// import Image from "next/image";
// import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const RSVPPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className="space-y-10">
      <h1 className="text-4xl font-bold">RSVP</h1>
      <p className="">
        Please follow the link below to RSVP using Google Forms.
      </p>
      {/* https://docs.google.com/forms/d/e/1FAIpQLSdcnsp-SaZPPtPfvHZRtf9imzzwRsCkmNVFDESI4OWoqNwDLQ/viewform */}
      <div className="text-center">
        <button className="py-2 px-4 my-2 w-48 text-2xl font-bold bg-slate-300 bg-gradient-to-tl from-pink-900/20 via-purple-800/20 to-pink-600/20 rounded-lg shadow">
          RSVP Here
        </button>
      </div>
    </section>
  );
};

RSVPPage.getLayout = getLayout;

export default RSVPPage;
