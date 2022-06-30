import Link from "next/link";

export const RSVPReminder = () => {
  return (
    <div className="mx-auto max-w-sm justify-center py-6 px-0 font-ebgaramond text-2xl italic text-gray-600 md:mt-8 md:max-w-xl md:text-center md:text-2xl">
      <div className="mx-auto mt-6 border border-slate-300 px-4 py-2 text-center text-xl leading-relaxed shadow-md md:border-[1px] md:px-6 md:py-2">
        Please
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdcnsp-SaZPPtPfvHZRtf9imzzwRsCkmNVFDESI4OWoqNwDLQ/viewform">
          <a
            className="mx-2 border-b border-indigo-300 font-playfair font-[500] not-italic tracking-wide text-sky-800  duration-300
          hover:border-rose-300/70 hover:text-pink-700  
          md:border-b md:px-0.5 md:leading-loose"
          >
            R.S.V.P.
          </a>
        </Link>
        as soon as possible if you haven{"'"}t already done so.
      </div>
    </div>
  );
};
