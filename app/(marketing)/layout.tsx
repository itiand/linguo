type Props = {
  children: React.ReactNode;
};

const MarketingLayout = ({ children }: Props) => {
  return (
    <div>
      <header>Header Here</header>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default MarketingLayout;
