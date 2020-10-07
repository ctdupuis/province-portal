import React from "react";
import CommentList from '../messageBoard/CommentList';

const Post = ({ content, userID }) => {

  return (
    <article className="post-container">
      <div className="post-content">
        <div className="post-author">CTD</div>
        <p className="post-text">
          {content}
          <br />
        <span className="timestamp"><em>3 hours ago</em></span>
        </p>
        <CommentList />
      </div>
    </article>
  );
};

export default Post;
