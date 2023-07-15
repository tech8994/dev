import React from "react";
import { Footer, Navbar } from "../../layout";
import { Outlet } from "react-router-dom";
import "./dashboard/scss/index.scss";



export const Admin = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
