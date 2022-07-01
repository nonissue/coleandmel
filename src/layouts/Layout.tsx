type Props = {
  children: React.ReactElement;
};

function Layout({ children }: Props): React.ReactElement {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-0 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
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
