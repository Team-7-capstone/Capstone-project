import React, { useMemo, useState } from "react";
import {
  likePost,
  getLikesByUser,
  postComment,
  getComments,
} from "../../../api/FirestoreAPI";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import "./index.scss";
import { AiOutlineComment } from "react-icons/ai";
import { PiMusicNote, PiMusicNoteFill } from "react-icons/pi";
import { serverTimestamp } from "firebase/firestore";

export default function LikeButton({ userId, postId, currentUser }) {
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [liked, setLiked] = useState(false); // posts initially unliked
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleLike = () => {
    likePost(userId, postId, liked);
  };

  const getComment = (event) => {
    setComment(event.target.value);
  };

  const addComment = () => {
    postComment(
      postId,
      comment,
      serverTimestamp(),
      getCurrentTimeStamp("LLL"),
      currentUser?.name
    );
    setComment("");
  };

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
    getComments(postId, setComments);
  }, [userId, postId]);

  return (
    <div className="like-container">
      <p>{likesCount} People Noted this Post</p>
      <div className="hr-line">
        <hr />
      </div>
      <div className="like-comment">
        <div className="likes-comment-inner" onClick={handleLike}>
          {liked ? (
            <PiMusicNoteFill size={25} color="#ea6e3a" />
          ) : (
            <PiMusicNote size={25} />
          )}

          <p className={liked ? "orange" : "black"}>Note</p>
        </div>
        <div
          className="likes-comment-inner"
          onClick={() => setShowCommentBox(!showCommentBox)}
        >
          {
            <AiOutlineComment
              size={30}
              color={showCommentBox ? "#ea6e3a" : "#212121"}
            />
          }

          <p className={showCommentBox ? "blue" : "black"}>Comment</p>
        </div>
      </div>
      {showCommentBox ? (
        <>
          <input
            onChange={getComment}
            placeholder="Add a Comment ..."
            className="comment-input"
            name="comment"
            value={comment}
          />
          <button className="add-comment-btn" onClick={addComment}>
            Add Comment
          </button>
          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <div className="all-comments">
                  <p className="name">{comment.name}</p>
                  <p className="comment">{comment.comment}</p>
                  <p className="timestamp">{comment.timeStamp}</p>
                  {/*
                  <p>•</p>
                   */}
                </div>
              );
            })
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
