import React, { useState } from "react";
import "./Post.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart, faCommentDots, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { likePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  
  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked? setLikes((prev)=>prev-1): setLikes((prev)=>prev+1)
  };
  return (
    <div className="Post">
      <img className="userImage"
          src={
            user.profilePicture
              ? serverPublic + data.userId.profilePicture
              : serverPublic + "defaultProfileImage.jpeg"
          }
          alt="Profile"
        />
      <div className="PostInfo">
          <div className="detail">
            <p style={{marginTop:"0.25rem"}}>
              <b>{data.userId.name} </b><span style={{color: "gray"}}>@{data.userId.username}</span>
            </p>
            <span>{data.desc}</span>
          </div>
          <img
            src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
            alt=""
          />

          <div className="postReact">

            <FontAwesomeIcon
              icon={liked ? solidHeart : regularHeart}
              style={{ color: "var(--blue)", cursor: "pointer", fontSize: "1.75rem" }}
              onClick={handleLike}
            />
            <FontAwesomeIcon
              icon={faCommentDots}
              style={{ color: "var(--blue)" ,cursor: "pointer" ,fontSize: "1.75rem"}}
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ color: "var(--blue)" ,cursor: "pointer" ,fontSize: "1.75rem"}}
            />
          </div>

          <span style={{ color: "var(--gray)", fontSize: "12px" }}>
            {likes} likes
          </span>
      </div>
      
      
    </div>
  );
};

export default Post;
