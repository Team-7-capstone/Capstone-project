import React, { useState, useMemo } from "react";
import { getSingleStatus, getSingleUser } from "../../../api/FirestoreAPI";
import './index.scss'
import PostsCard from "../PostsCard";
// import { HiOutlinePencil } from "react-icons/hi";
import { useLocation } from "react-router-dom";
// import { getStatus } from "../../../api/FirestoreAPI";

const ProfileCard = ({ currentUser, onEdit}) => {
    let location = useLocation();
    const [allStatuses, setAllStatus] = useState([]);
    const [currentProfile, setCurrentProfile] = useState({});

    useMemo(() => {
        if(location?.state?.id) {
            getSingleStatus(setAllStatus, location?.state?.id);
        }

        if(location?.state?.email) {
            getSingleUser(setCurrentProfile, location?.state?.email)
        }
    }, []);

    return (
        <>
            <div className="profile-card">
                <div className="profile-info">
                    <div>
                        <h3 className="username">
                            {Object.values(currentProfile).length === 0
                            ? currentUser.name
                            : currentProfile?.name}
                        </h3>
                        <p className="userEmail">
                        {Object.values(currentProfile).length === 0
                            ? currentUser.email
                            : currentProfile?.email}
                        </p>
                        <p className="heading">
                        {Object.values(currentProfile).length === 0
                            ? currentUser.headline
                            : currentProfile?.headline}
                        </p>
                        <p className="location">
                        {Object.values(currentProfile).length === 0
                            ? currentUser.location
                            : currentProfile?.location}
                        </p>
                        <div className="edit-btn">
                            <button onClick={onEdit}>Edit</button>
                        </div>
                    </div>
                    <div className="right-info">
                        <p className="expertise">
                         {Object.values(currentProfile).length === 0
                            ? `Skills: ${currentUser.expertise}`
                            : `Skills: ${currentProfile?.expertise}`}
                        </p>
                        <p className="intrest">
                         {Object.values(currentProfile).length === 0
                            ? `Interests: ${currentUser.intrest}`
                            : `Interest: ${currentProfile?.intrest}`}
                        </p>
                    </div>
                </div>
                <p className="about">
                    {Object.values(currentProfile).length === 0
                        ? currentUser.aboutMe
                        : currentProfile?.aboutMe}
                </p>
            </div>

            <div className="post-status-main">
                {allStatuses.filter((item) => {
                    return item.userEmail === localStorage.getItem("userEmail")
                }).map((posts) => {
                    return(
                        <div key={posts.id}>
                            <PostsCard posts={posts}/>
                        </div>
                    );
                })}
             </div>

        </>
    )
}

export default ProfileCard