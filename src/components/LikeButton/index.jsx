import React, { useMemo, useState } from "react";
import { likePost, getLikesByUser } from "../../../api/FirestoreAPI";
import "./index.scss";
import { AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";

export default function LikeButton({ userId, postId }) {
  const [likesCount, setLikesCount] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [liked, setLiked] = useState(false); // posts initially unliked
  const [comment, setComment] = useState("");
  const handleLike = () => {
    likePost(userId, postId);
  };

  const getComment = (event) => {
    setComment(event.target.value)
  };

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
  }, [userId, postId]);

  return (
    <div className="like-container">
      <p>{likesCount} People Like this Post</p>
      <div className="hr-line">
        <hr />
      </div>
      <div className="like-comment">
        <div className="likes-comment-inner" onClick={handleLike}>
          {liked ? (
            <AiFillHeart size={30} color="#0a66c2" />
          ) : (
            <AiOutlineHeart size={30} />
          )}

          <p className={liked ? "blue" : "black"}>Like</p>
        </div>
        <div
          className="likes-comment-inner"
          onClick={() => setShowCommentBox(true)}
        >
          {
            <AiOutlineComment
              size={30}
              color={showCommentBox ? "#0a66c2" : "#212121"}
            />
          }

          <p className={showCommentBox ? "blue" : "black"}>Comment</p>
        </div>
      </div>
      {showCommentBox ? (
        <>
          <input
            onClick={getComment}
            placeholder="Add a Comment"
            className="comment-input"
            name="comment"
          />
          <button className="add-comment-btn">Add a Comment</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
