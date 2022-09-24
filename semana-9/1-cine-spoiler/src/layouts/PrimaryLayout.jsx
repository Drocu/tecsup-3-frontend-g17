import { Outlet } from "react-router-dom";
import Header from "../components/section/Header";

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '4rem' }}>
        <Outlet />
      </main>
      <footer>Eliot Garamendi</footer>
    </>
  );
};

export default PrimaryLayout;