import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top footer">
      <p className="footerpara">
        © 2024 Dipak-Gautam, Inc. All rights reserved.
      </p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3">
          <a
            className="link-body-emphasis"
            href="https://www.facebook.com/boma.colo"
          >
            <FaFacebook />
          </a>
        </li>
        <li className="ms-3">
          <a
            className="link-body-emphasis"
            href="https://github.com/Dipak-Gautam"
          >
            <FaGithub />
          </a>
        </li>
        <li className="ms-3">
          <a className="link-body-emphasis" href="#"></a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
