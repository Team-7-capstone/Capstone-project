import React, { useState } from "react";
import { editProfile } from "../../../api/FirestoreAPI";
import "./index.scss"

const ProfileEdit = ( { onEdit, currentUser } ) => {
    const [editInputs, setEditInput] = useState({})

    const getInput = (e) => {
        let {name, value} = e.target;
        let input = {[name]: value};
        setEditInput({...editInputs, ...input})
    }

    const updateProfileData = async() => {
        editProfile(currentUser?.userId, editInputs);
        await onEdit()
    };

    return(
        <div className="profile-card">
            <div className="edit-btn">
                <button onClick={onEdit}>Go Back</button>
            </div>
            <div className="profile-edits">
                <input onChange={getInput} className="common-input" type="text" name="name" placeholder="Name"/>
                <input onChange={getInput} className="common-input" type="text" name="headline" placeholder="Headline"/>
                <input onChange={getInput} className="common-input" type="text" name="location" placeholder="Location"/>
                <input onChange={getInput} className="common-input" type="text" name="expertise" placeholder="Expertise"/>
                <input onChange={getInput} className="common-input" type="text" name="intrest" placeholder="Intrest"/>
            </div>
            <div className="save-container">
                <button onClick={updateProfileData} className="save-btn">Save</button>
            </div>
        </div>
    )
}

export default ProfileEdit