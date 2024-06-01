import React from "react";
import HeroImage from "./HeroImage";
import AboutMe from "./AboutMe";
import Contactme2 from "./Contactme2";
import MainProjects from "./MainProjects";

const Home = () => {
  return (
    <>
      <HeroImage></HeroImage>
      <AboutMe></AboutMe>
      <div className="seperation"></div>
      <MainProjects></MainProjects>
      <div className="seperation"></div>
      <Contactme2></Contactme2>
    </>
  );
};

export default Home;
