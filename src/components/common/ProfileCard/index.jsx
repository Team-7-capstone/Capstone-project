import React from "react";
import './index.scss'

const ProfileCard = ({ currentUser }) => {
    return (
        <div className="profile-card">
            <div className="edit-btn">
                <button>Edit</button>
            </div>
            <h3 className="username">{currentUser.name}</h3>
            <p className="userEmail">{currentUser.email}</p>
        </div>
    )
}

export default ProfileCard