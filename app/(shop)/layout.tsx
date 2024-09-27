type Props = {
  children: React.ReactNode;
};

const ShopLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <h1>Shop Header</h1>
      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <h1>Shop Footer</h1>
    </div>
  );
};

export default ShopLayout;
