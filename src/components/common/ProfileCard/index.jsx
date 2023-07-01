import React, { useState, useMemo } from "react";
import './index.scss'
import PostsCard from "../PostsCard";
import { getStatus } from "../../../api/FirestoreAPI";

const ProfileCard = ({ currentUser, onEdit}) => {
    const [allStatuses, setAllStatus] = useState([]);

    useMemo(() => {
        getStatus(setAllStatus)
    }, []);

    return (
        <>
            <div className="profile-card">

                <div className="profile-info">
                    <div>
                        <h3 className="username">{currentUser.name}</h3>
                        <p className="userEmail">{currentUser.email}</p>
                        <p className="heading">{currentUser.headline}</p>
                        <p className="location">{currentUser.location}</p>
                        <div className="edit-btn">
                            <button onClick={onEdit}>Edit</button>
                        </div>
                    </div>
                    <div className="right-info">
                        <p className="expertise">Expertise: {currentUser.expertise}</p>
                        <p className="intrest">Intrests: {currentUser.intrest}</p>
                    </div>
                </div>
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