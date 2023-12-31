import React, { useMemo, useState } from "react";
import "./index.scss";
import { onLogout } from "../../../api/AuthAPI";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../../api/FirestoreAPI";
import Button from "../Button";

const ProfilePopup = () => {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div className="popup-card">
      <p className="name">{currentUser.name}</p>

      <Button
        title="View Profile"
        onClick={() =>
          navigate("/profile", {
            state: { id: currentUser?.id },
          })
        }
      />
      <Button title="Log Out" onClick={onLogout} />
    </div>
  );
};

export default ProfilePopup;
