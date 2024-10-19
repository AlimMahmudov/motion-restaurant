import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Best from "./best/Best";
import Visit from "./visit/Visit";
import MainMenu from "./nainMenu/MainMenu";
import ModernInterior from "./modern/ModernInterior";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Best />
      <MainMenu />
      <ModernInterior />
      <Visit />
    </>
  );
};

export default HomePage;
