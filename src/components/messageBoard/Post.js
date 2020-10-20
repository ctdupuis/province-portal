import React from "react";
import CommentList from '../messageBoard/CommentList';

const Post = ({ content, userID, author, created, comments, id }) => {

  return (
    <article className="post-container">
      <div className="post-content">
        <div className="post-author">{author}</div>
        <p className="post-text">
          {content}
          <br />
        <span className="timestamp"><em>{created}</em></span>
        </p>
        <CommentList userID={userID} postID={id} comments={comments}/>
      </div>
    </article>
  );
};

export default Post;
