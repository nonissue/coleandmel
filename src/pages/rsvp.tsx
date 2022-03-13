import { NextPage } from "next/types";
// import Image from "next/image";
// import Link from "next/link";
import { getLayout } from "@/layouts/Layout";

const RSVPPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  return (
    <section className="space-y-10">
      {/* https://docs.google.com/forms/d/e/1FAIpQLSdcnsp-SaZPPtPfvHZRtf9imzzwRsCkmNVFDESI4OWoqNwDLQ/viewform */}
      <div className="text-center">
        {/* hover:bg-rose-900 bg-gradient-to-br hover:bg-gradient-to-br from-rose-900/100 hover:from-rose-600 via-pink-700/100 hover:via-rose-700 to-rose-900/70 hover:to-rose-600 */}
        <button className="py-4 px-6 my-12 w-64 text-2xl font-bold  text-slate-100 bg-rose-800 hover:bg-sky-900 rounded-lg shadow-xl transition-all duration-500">
          RSVP Here
        </button>
      </div>
    </section>
  );
};

RSVPPage.getLayout = getLayout;

export default RSVPPage;
