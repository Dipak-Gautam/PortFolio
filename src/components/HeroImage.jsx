import React from "react";
import { PiHandWavingDuotone } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GrMailOption } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";

const HeroImage = () => {
  return (
    <div className="container col-xxl-8 px-4 " style={{ width: "85%" }}>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 ">
          <img
            src="images/profilecopy.jpg"
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="300"
            height="300"
            loading="lazy"
            style={{ margin: "auto", borderRadius: "160px" }}
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Front-End React Developer
            <PiHandWavingDuotone className="colorwave" />
          </h1>
          <p className="lead">
            Hi, I'm Dipak Gautam. A passionate Front-End React Developer based
            in pokhara, Nepal. <FaLocationDot style={{ color: "red" }} />
          </p>
          <span className="herocontact">
            <MdOutlinePhoneInTalk
              className="phonecolor"
              style={{ marginRight: "-1px" }}
            />
            +977-9814132234
          </span>
          <span className="herocontact">
            <GrMailOption
              className="colormail"
              style={{ marginRight: "6px" }}
            />
            anjangautam095@gmail.com
          </span>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-light btn-lg px-4 me-md-2 "
            >
              <a href="https://github.com/Dipak-Gautam" target="/blank">
                <FaGithub style={{ color: "black" }} />
              </a>
            </button>
          </div>
        </div>
        <div className="iconclass flex">
          <span className="iconspan">Tech Stack :</span>
          <FaHtml5 className="logos" style={{ color: "red" }} />
          <FaCss3Alt className="logos" style={{ color: "blue" }} />
          <BiLogoJavascript
            className="logos"
            style={{ color: "yellow", backgroundColor: "black" }}
          />
          <FaReact className="logos" style={{ color: "cyan" }} />
          <SiTailwindcss className="logos" style={{ color: "blue" }} />
          <SiExpress className="logos " />
          <SiMongodb className="logos " style={{ color: "green" }} />
          <FaNode className="logos " style={{ color: "green" }} />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
