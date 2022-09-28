import { Outlet } from "react-router-dom";
import Footer from "../components/section/Footer";
import Header from "../components/section/Header";

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;