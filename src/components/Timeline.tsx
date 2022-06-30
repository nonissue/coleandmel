/* This example requires Tailwind CSS v2.0+ */
import {
  MusicNoteIcon,
  SparklesIcon,
  HeartIcon,
} from "@heroicons/react/outline";

const timelineData = [
  {
    id: 1,
    content: "The Ceremony",
    target: "",
    href: "#",
    date: "4:00 PM – 4:30 PM",
    datetime: "2022-07-21",
    icon: HeartIcon,
    iconBackground: "bg-slate-400",
  },
  {
    id: 2,
    content: "The Cocktail Hour",
    target: "Enjoy some refreshments and games!",
    href: "#",
    date: "4:30 PM – 5:00 PM",
    datetime: "2022-07-21",
    icon: SparklesIcon,
    iconBackground: "bg-slate-500",
  },
  {
    id: 3,
    content: "The Reception",
    target: "Dinner, dancing, and fun!",
    href: "#",
    date: "5:30 PM – 11:00 PM",
    datetime: "2022-07-21",
    icon: MusicNoteIcon,
    iconBackground: "bg-slate-500",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Timeline() {
  return (
    <div className="">
      <ul role="list" className="py-2 md:py-4">
        {timelineData.map((event) => (
          <li key={event.id}>
            <div className=" mx-auto max-w-lg pb-2 md:scale-110 md:pb-10">
              <div className=" mb-8 flex flex-col items-center justify-center md:flex-col md:items-center md:justify-center">
                <div className="mb-4">
                  <span
                    className={classNames(
                      "bg-sky-900",
                      "flex h-12 w-12 items-center justify-center rounded-full p-2 shadow-md md:h-12 md:w-12 md:p-3"
                    )}
                  >
                    <event.icon
                      className="h-6 w-6 text-slate-50 md:h-8 md:w-8"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="flex min-w-0 flex-col  font-ebgaramond text-xl">
                  <div>
                    <h1 className="font-fraunces text-4xl font-[500] italic text-gray-900">
                      {event.content}
                    </h1>
                    {event.target !== "" && (
                      <div className="pt-2 text-xl font-[300] text-gray-600">
                        {event.target}
                      </div>
                    )}
                  </div>
                  <div className="whitespace-nowrap pt-2 text-center font-sans text-sm text-slate-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
