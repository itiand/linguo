import Header from "./header";

type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
