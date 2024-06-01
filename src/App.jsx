import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NewNavbar from "./components/NewNavbar";
import { useState } from "react";
import Home from "./components/Home";
import MainProjects from "./components/MainProjects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [displayHome, setDisplayHome] = useState("home");
  const handleMode = (mode) => {
    console.log("handlemode clicked", mode);
    setDisplayHome(mode);
  };
  return (
    <>
      <NewNavbar handleMode={handleMode} />
      {displayHome === "home" && <Home />}
      {displayHome === "project" && <MainProjects />}
      {displayHome === "about" && <About />}
      <Footer />
    </>
  );
}

export default App;
