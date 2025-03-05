import Header from "./Header";

const AppLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      <main className="pt-8">{children}</main>
    </>
  );
};

export default AppLayout;
