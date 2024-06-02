import React from "react";
import Projects from "./Projects";
import ProjectsNegative from "./ProjectsNegative";
import Nayaghar from "./Nayaghar";
import VirtualPatro from "./VirtualPatro";

const MainProjects = () => {
  return (
    <>
      <h3 className="project">Projects</h3>
      <VirtualPatro></VirtualPatro>
      <Nayaghar></Nayaghar>
      <Projects></Projects>
      <ProjectsNegative></ProjectsNegative>
    </>
  );
};

export default MainProjects;
