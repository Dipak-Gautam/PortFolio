import React from "react";
import { PiSealCheckFill } from "react-icons/pi";

const Experience = () => {
  return (
    <div className="expdiv">
      <p className="smallpara">Explore My</p>
      <h2 className="expheading">Experience</h2>
      <div className="expcontent">
        <ul>
          <li className="explist">
            <div>
              <div className="liinside">
                <PiSealCheckFill />
                <p className="lipara mx-2">HTML</p>
              </div>
              <p className="subpara">expirenced</p>
            </div>
            <div>
              <div className="liinside">
                <PiSealCheckFill />
                <p className="lipara mx-2">CSS</p>
              </div>
              <p className="subpara">expirenced</p>
            </div>
          </li>
          <li className="explist">
            <div>
              <div className="liinside">
                <PiSealCheckFill />
                <p className="lipara mx-2">JavaScript</p>
              </div>
              <p className="subpara">expirenced</p>
            </div>
            <div>
              <div className="liinside">
                <PiSealCheckFill />
                <p className="lipara mx-2">React</p>
              </div>
              <p className="subpara">expirenced</p>
            </div>
          </li>
          <li className="explist">
            <div>
              <div className="liinside">
                <PiSealCheckFill />
                <p className="lipara mx-2">Flutter</p>
              </div>
              <p className="subpara">basic</p>
            </div>
            <div>
              <div className="liinside">
                <p className="lipara mx-2"></p>
              </div>
              <p className="subpara"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
