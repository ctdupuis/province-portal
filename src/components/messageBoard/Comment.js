import React from 'react';

const Comment = ({ content, author, created }) => {
    return(
        <div className="comment">
              <div className="comment-author">{author}</div>
              <li>
                {content}
                <br />
              <div className="timestamp"><em>{created}</em></div>
              </li>
            </div>
    )
}

export default Comment;