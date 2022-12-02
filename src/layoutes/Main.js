import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-[1200px] mx-auto">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default Main;
