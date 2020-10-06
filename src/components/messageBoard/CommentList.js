import React from 'react';
import Comment from './Comment';

const CommentList = props => {
    return(
        <div className="comment-container">
          <ul className="comment-list">
            <li className="comment-head">Comments</li>
            <Comment />
            <Comment />
            <Comment />
            <div className="comment">
              <div className="post-author">AEJ</div>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </li>
            </div>
            <div className="comment flex-container">
              <div className="input-container">
                <textarea
                  type="text"
                  placeholder="Leave a comment..."
                  className="comment-input"
                />
              </div>
              <div className="btn-container">
                <button className="comment-submit">Post Comment</button>
              </div>
            </div>
          </ul>
        </div>
    )
}

export default CommentList;