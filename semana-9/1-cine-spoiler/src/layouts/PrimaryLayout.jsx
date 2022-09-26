import { Outlet } from "react-router-dom";
import Header from "../components/section/Header";

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Rodrigo Aranda</footer>
    </>
  );
};

export default PrimaryLayout;