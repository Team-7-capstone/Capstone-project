import React, { useState, useMemo } from "react";
import { postStatus, getStatus } from "../../../api/FirestoreAPI";
import ModalComponent from "../Modal";
import PostsCard from "../PostsCard";
import { getUniqueId } from "../../../helpers/getUniqueId";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import "./index.scss";

export default function PostStatus({ currentUser }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);
  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: currentUser.email,
      userName: currentUser.name,
      postId: getUniqueId(),
      userId: currentUser.userId
    };
    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  return (
    <div className="post-status-main">
      <div className="post-status">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a Post
        </button>
      </div>
      <ModalComponent
        setStatus={setStatus}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        status={status}
        sendStatus={sendStatus}
      />
      <div>
        {allStatuses.map((posts) => {
          return <PostsCard key={posts.id} posts={posts} />;
        })}
      </div>
    </div>
  );
}
