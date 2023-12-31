import React, { useState, useMemo } from "react";
import { getSingleStatus, getSingleUser } from "../../../api/FirestoreAPI";
import PostsCard from "../PostsCard";
import { HiOutlinePencil } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import FileUploadModal from "../FileUploadModal";
import { uploadImage as uploadImageAPI } from "../../../api/ImageUpload";
import "./index.scss";
import AudioPlayer from "../AudioPlayer";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import "../styles/customize-progress-bar.css";

export default function ProfileCard({ onEdit, currentUser }) {
  // const [audioFiles, setAudioFiles] = useState([]); // part of individual audioFiles
  let location = useLocation();
  const [allStatuses, setAllStatus] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  const [currentImage, setCurrentImage] = useState({});
  const [progress, setProgress] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const getImage = (event) => {
    setCurrentImage(event.target.files[0]);
  };

  const uploadImage = () => {
    uploadImageAPI(
      currentImage,
      currentUser.id,
      setModalOpen,
      setProgress,
      setCurrentImage
    );
  };

  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatus, location?.state?.id);
    }

    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
  }, []);

  return (
    <>
      <FileUploadModal
        getImage={getImage}
        uploadImage={uploadImage}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        currentImage={currentImage}
        progress={progress}
      />
      <div className="profile-card">
        {currentUser.id === location?.state?.id ? (
          <div className="edit-btn">
            <HiOutlinePencil className="edit-icon" onClick={onEdit} />
          </div>
        ) : (
          <></>
        )}
        <div className="profile-info">
          <div className="top">
            <div className="left">
              <img
                className="profile-image"
                onClick={() => setModalOpen(true)}
                src={
                  Object.values(currentProfile).length === 0
                    ? currentUser.imageLink
                    : currentProfile?.imageLink
                }
                alt="profile-image"
              />

              <h3 className="userName">
                {Object.values(currentProfile).length === 0
                  ? currentUser.name
                  : currentProfile?.name}
              </h3>

              <p className="userEmail">
                {Object.values(currentProfile).length === 0
                  ? currentUser.email
                  : currentProfile?.email}
              </p>

              {currentUser.location || currentProfile?.location ? (
                <p className="location">
                  {Object.values(currentProfile).length === 0
                    ? `${currentUser.location}`
                    : `${currentProfile?.location}`}
                </p>
              ) : (
                <></>
              )}
            </div>

            
            <div className="music-button">  
              <AudioPlayer />
            </div>

            <div className="right-info">
              <p className="expertise">
                {Object.values(currentProfile).length === 0

                  ? currentUser.expertise
                    ? `Skills: ${currentUser.expertise}`
                    : "Skills:"
                  : currentProfile?.expertise
                  ? `Skills: ${currentProfile?.expertise}`
                  : "Skills:"}
              </p>
              <p className="intrest">
                {Object.values(currentProfile).length === 0
                  ? currentUser.intrest
                    ? `Interests: ${currentUser.intrest}`
                    : "Interests:"
                  : currentProfile?.intrest
                  ? `Interests: ${currentProfile?.intrest}`
                  : "Interests:"}
              </p>
            </div>
          </div>

          <p className="heading">
            {Object.values(currentProfile).length === 0
              ? currentUser.headline
              : currentProfile?.headline}
          </p>
        </div>

        <p className="about">
          {Object.values(currentProfile).length === 0
            ? `About: ${currentUser.aboutMe}`
            : `About: ${currentProfile?.aboutMe}`}
        </p>
        <hr />
      </div>

      <div className="post-status-main">
        {allStatuses?.map((posts) => {
          return (
            <div key={posts.id}>
              <PostsCard posts={posts} />
            </div>
          );
        })}
      </div>
    </>
  );
}
