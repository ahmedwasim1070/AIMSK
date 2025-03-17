import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Layout() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="w-[100%] h-[200vh] font-gfsDidot">
        <Header showNav={showNav} setShowNav={setShowNav} />

        {/* Nabar */}
        <div
          className={`xl:w-[60%] xxs:w-[100%] h-[100vh] duration-300 fixed ${
            showNav ? "right-0" : "xl:right-[-60%] xxs:right-[-100%]"
          }`}
        >
          <Navigation />
        </div>
        {/* Main Content */}
        <main
          className={`relative duration-300 ${
            showNav ? "xl:left-[-60%] xxs:left-[-100%] " : "left-0"
          }`}
        >
          <Outlet />

          <Footer />
        </main>
      </div>
    </>
  );
}
