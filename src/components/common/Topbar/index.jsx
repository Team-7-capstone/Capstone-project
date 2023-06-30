import React from "react";
import LinkedinLogo from "../../../assets/LinkedinLogo.png";
import user from "../../../assets/user.png";
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
        <AiOutlineSearch size={30} className="react-icon" />
        <AiOutlineHome size={30} />
        <AiOutlineUserSwitch size={30} className="react-icon" />
        <BsBriefcase size={30} className="react-icon" />
        <AiOutlineMessage size={30} className="react-icon" />
        <AiOutlineBell size={30} className="react-icon" />
        <img className="user-logo" src={user} alt="user" />
      </div>
    </div>
  );
}
