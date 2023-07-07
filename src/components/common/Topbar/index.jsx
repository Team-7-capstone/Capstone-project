import React, { useState } from "react";
import LinkedinLogo from "../../../assets/linkedinLogo.png";
import user from "../../../assets/user.png";
import ProfilePopup from "../ProfilePopup";

import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineUserSwitch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsBriefcase } from "react-icons/bs";
import "./index.scss";

export default function Topbar() {
  const [popupVisible, setPopupVisible] = useState(false);

  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };

  const displayPop = () => {
    setPopupVisible(!popupVisible)
  }

 
  return (
    <div className="topbar-main">
      {popupVisible ? (
        <div className="popup-position">
          <ProfilePopup />
        </div>
      ) : (
        <></>
      )}
<<<<<<< HEAD

=======
>>>>>>> main
      <img
        className="linkedin-logo"
        src={LinkedinLogo}
        alt="LinkedinLogo"
      ></img>
      <div className="react-icons">
        <AiOutlineSearch size={30} className="react-icon" />
        <AiOutlineHome
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/home")}
        />
        <AiOutlineUserSwitch
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/profile")}
        />
        <BsBriefcase size={30} className="react-icon" />
        <AiOutlineMessage size={30} className="react-icon" />
        <AiOutlineBell size={30} className="react-icon" />
      </div>
      <img className="user-logo" src={user} alt="user" onClick={displayPop}/>
    </div>
  );
}

