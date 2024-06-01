import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Contactme2 = () => {
  return (
    <div className="list-group container col-xxl-8 px-4">
      <h2 className="expheading">Contact Me</h2>
      <a
        href="https://www.facebook.com/boma.colo"
        className="list-group-item list-group-item-action contactlist"
        aria-current="true"
        target="/blank"
      >
        <FaFacebook className="liinside colorfb" />
        <span className="liinside">https://www.facebook.com/boma.colo</span>
      </a>
      <a className="list-group-item list-group-item-action contactlist">
        <GrMailOption className="liinside colormail" />

        <span className="liinside">anjangautam095@gmail.com</span>
      </a>
      <a className="list-group-item list-group-item-action contactlist">
        <MdOutlinePhoneInTalk className="liinside phonecolor" />
        <span className="liinside">+977-9814132234</span>
      </a>
    </div>
  );
};

export default Contactme2;
