import React from "react";
import Projects from "./Projects";
import ProjectsNegative from "./ProjectsNegative";
import Nayaghar from "./Nayaghar";

const MainProjects = () => {
  return (
    <>
      <h3 className="project">Projects</h3>
      <Nayaghar></Nayaghar>
      <Projects></Projects>
      <ProjectsNegative></ProjectsNegative>
    </>
  );
};

export default MainProjects;
