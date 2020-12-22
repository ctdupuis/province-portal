import React from 'react';

const Comment = ({ content, author, created }) => {
    return(
      <li className="comment">
      <div className="comment-author">{author}</div>
      <div className="comment-text-and-meta-data">
        <div className="comment-text">
          {content}
        </div>
        <div className="meta_data">
          <div className="timestamp_wrapper">
            <span className="timestamp">{created}</span>
          </div>
        </div>
      </div>
    </li>
    )
}

export default Comment;