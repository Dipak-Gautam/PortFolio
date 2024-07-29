import React from "react";
import Projects from "./Projects";
import ProjectsNegative from "./ProjectsNegative";
import Nayaghar from "./Nayaghar";
import VirtualPatro from "./VirtualPatro";
import MeroPatro from "./MeroPatro/MeroPatro";

const MainProjects = () => {
  return (
    <>
      <h3 className="project underline mb-5">Projects</h3>
      <MeroPatro></MeroPatro>
      <VirtualPatro></VirtualPatro>
      <Nayaghar></Nayaghar>
      <Projects></Projects>
      <ProjectsNegative></ProjectsNegative>
    </>
  );
};

export default MainProjects;
