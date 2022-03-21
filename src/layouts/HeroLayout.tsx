import Image from "next/image";

import { Header } from "src/components";

type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <div className="overflow-hidden relative bg-white">
      <Header />
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full">
          <Image
            objectFit="cover"
            src="/cole-and-mel-hero.jpeg"
            alt=""
            width="2190"
            height="1460"
            layout="responsive"
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 lg:w-full lg:max-w-2xl xl:pb-32">
          <svg
            className="hidden absolute inset-y-0 right-0 w-48 h-full text-white  translate-x-1/2 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          {children}
        </div>
      </div>
    </div>
  );
}

export const getLayout = (page: React.ReactElement): React.ReactElement => (
  <Layout>{page}</Layout>
);

export { Layout };
