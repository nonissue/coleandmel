import Link from "next/link";

export const RSVPReminder = () => {
  return (
    <div className="relative mx-auto flex max-w-sm justify-center py-6 px-0 font-ebgaramond text-lg italic text-gray-600 md:mt-8 md:max-w-xl md:text-center md:text-2xl">
      <div className="mx-2 mt-6 rounded-sm border border-slate-300 px-4 pt-1 pb-2 text-center leading-relaxed shadow-md md:border-2 md:px-6 md:py-3 md:text-center">
        Please{"  "}
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdcnsp-SaZPPtPfvHZRtf9imzzwRsCkmNVFDESI4OWoqNwDLQ/viewform">
          <a
            className="mx-0.5 inline border-b border-sky-900/20 font-[500] not-italic leading-tight tracking-widest text-blue-800  duration-300
          hover:border-rose-300/70 hover:text-pink-700  
          md:border-b-2 md:px-0.5 md:leading-normal"
          >
            R.S.V.P.
          </a>
        </Link>{" "}
        as soon as possible.
      </div>
    </div>
  );
};
