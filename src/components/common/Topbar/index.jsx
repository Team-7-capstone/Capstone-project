import React from "react";
import LinkedinLogo from "../../../assets/LinkedinLogo.png";
import "./index.scss";
import {
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

export default function Topbar() {
  return (
    <div className="topbar-main">
      <img className="linkedin-logo" src={LinkedinLogo} alt="LinkedinLogo" />
      <div className="react-icons">
        <AiOutlineSearch size={40} className="react-icon" />
        <AiOutlineHome size={40} />
        <AiOutlineUserSwitch size={40} className="react-icon" />
        <BsBriefcase size={40} className="react-icon" />
        <AiOutlineMessage size={40} className="react-icon" />
        <AiOutlineBell size={40} className="react-icon" />
      </div>
    </div>
  );
}
