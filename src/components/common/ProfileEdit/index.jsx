// I am currently using this ProfileEdit.jsx
import React, { useState } from "react";
import { editProfile } from "../../../api/FirestoreAPI";
import "./index.scss";

const ProfileEdit = ({ onEdit, currentUser }) => {
  const [editInputs, setEditInput] = useState({
    name: currentUser?.name || "",
    headline: currentUser?.headline || "",
    location: currentUser?.location || "",
    expertise: currentUser?.expertise || "",
    intrest: currentUser?.intrest || "",
    aboutMe: currentUser?.aboutMe || "",
  });

  const getInput = (e) => {
    let { name, value } = e.target;
    let input = { [name]: value };
    setEditInput({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    editProfile(currentUser?.id, editInputs);
    await onEdit();
  };

  return (
    <div className="profile-card">
      <div className="edit-btn">
        <button onClick={onEdit}>Go Back</button>
      </div>
      <div className="profile-edits">
        <label htmlFor="name">Name</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          value={editInputs.name}
          name="name"
          placeholder="Name"
        />

        <label htmlFor="headline">Headline</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          value={editInputs.headline}
          name="headline"
          placeholder="Headline"
          maxLength="50"
        />

        <label htmlFor="location">Location</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          value={editInputs.location}
          name="location"
          placeholder="Location"
        />

        <label htmlFor="expertise">Skills</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          value={editInputs.expertise}
          name="expertise"
          placeholder="Skills"
        />

        <label htmlFor="intrest">Interests</label>
        <input
          onChange={getInput}
          className="common-input"
          type="text"
          value={editInputs.intrest}
          name="intrest"
          placeholder="Interest"
        />

        <label htmlFor="aboutMe">About</label>
        <textarea
          className="common-textArea"
          onChange={getInput}
          name="aboutMe"
          value={editInputs.aboutMe}
          cols=""
          rows="5"
        />
      </div>
      <div className="save-container">
        <button onClick={updateProfileData} className="save-btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileEdit;
