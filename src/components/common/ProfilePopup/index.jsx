import React, { useMemo, useState } from "react";
import "./index.scss";
import { onLogout } from "../../../api/AuthAPI";
import { useNavigate} from "react-router-dom";
import { getCurrentUser } from "../../../api/FirestoreAPI";

const ProfilePopup = () => {
    let navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);
    
    return(
        <div className="popup-card">
            <ul className="popup-options">
                <li className="popup-option"
                onClick={() => navigate('/profile', {
                    state: {id: currentUser?.id}
                })}>
                    View Profile
                </li>
                <li className="popup-option" onClick={onLogout}>Logout</li>
            </ul>
        </div>
    )
};

export default ProfilePopup