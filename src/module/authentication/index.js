import React from "react";
import { Login } from "./login";
import { Navbar, Footer } from "../../layout";
import { NavLink, Outlet } from "react-router-dom";

export const Authentication = () => {
  return (
    <div>
      <Navbar />
      <div className="banner_auth">
        {" "}
        <h1>Login / Register</h1>
      </div>
      <div className="link_heading">
        <NavLink to="login">Login {" "}</NavLink>
        <div className="line">
        /
        </div>
        <NavLink to="registration">Registration</NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
      <Footer />
    </div>
  );
};
