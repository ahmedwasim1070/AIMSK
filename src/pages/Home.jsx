import React, { useState } from "react";
import Navigation from "../components/Navigation"
import Header from "../components/Header";
import Hero from "../components/Herotag";

function Home() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className="w-[100%] relative overflow-x-hidden font-gfsDidot">
        {/* Nabar */}
        <div
          className={`w-[60%] h-[100vh] duration-300 absolute ${
            showNav ? "right-0" : "right-[-60%]"
          }`}
        >
          <Navigation showNav={showNav} setShowNav={setShowNav} />
        </div>
        {/* Main Content */}
        <div
          className={`relative duration-300 ${
            showNav ? "left-[-60%] " : "left-0"
          }`}
        >
          <Header showNav={showNav} setShowNav={setShowNav} />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default Home;
