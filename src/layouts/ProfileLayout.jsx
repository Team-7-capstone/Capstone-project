import React, {useMemo, useState} from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import TopBar from "../components/common/Topbar"
import Profile from "../Pages/Profile"

const ProfileLayout = () => {
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);

    return (
        <div>
            <TopBar currentUser={currentUser}/>
            <Profile currentUser={currentUser}/>
        </div>
    )
}

export default ProfileLayout