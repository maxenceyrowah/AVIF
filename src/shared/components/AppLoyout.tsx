import Header from "./Header";

const AppLayout = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return (
    <>
      <Header />
      <main className="pt-8">{children}</main>
    </>
  );
};

export default AppLayout;
