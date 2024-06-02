import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <>
      <div
        className="container col-xxl-8 px-4 my-2 py-5"
        style={{ width: "75%" }}
      >
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-lg-6">
            <p className="aboutpara">About me</p>
            <h1
              className="display-5 fw-bold text-body-emphasis lh-1 mb-3"
              style={{ fontSize: "2rem" }}
            >
              A dedicated Front-End Developer based in pokhara, Nepal.
              <FaLocationDot style={{ color: "red" }} />
            </h1>
            <p className="lead" style={{ fontSize: "18px" }}>
              As a Front-End Developer. I posses an impressive arsenal of skills
              in HTML, CSS, Java-Script, React, TailWind and React Native. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My experties lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utililizing cutting-edge development tools and techniques. I am
              also a team player who thrives in collabrating with
              cross-functional teams to produce outstanding web applications.
            </p>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="images/devpic.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="400"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
