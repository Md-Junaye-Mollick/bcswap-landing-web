import React from "react";
import Header from "./header";
import { Outlet } from "react-router";
import Footer from "./footer";

const Layout = () => {
  return (
    <>
      <section className="text-dispute-color">
        <nav className="fixed top-0 w-full z-50">
          <Header />
        </nav>
        <main className="bg-pre-bg min-h-screen h-full p-4 mt-4">{<Outlet />}</main>
        <Footer />
      </section>
    </>
  );
};

export default Layout;
