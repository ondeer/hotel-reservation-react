import { Outlet } from "react-router-dom";

import Header from "../components/header/Header.jsx";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
