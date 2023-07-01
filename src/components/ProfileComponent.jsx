import React from "react";
import ProfileCard from "./common/ProfileCard"
// import ProfileEdit

const ProfileComponent = ({ currentUser }) => {
    return(
        <div>
            <ProfileCard currentUser={currentUser}/> 
        </div>
    )
}

export default ProfileComponent