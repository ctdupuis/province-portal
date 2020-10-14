import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
    const renderComments = comments.map(comment => <Comment content={comment.content} author={comment.author} created={comment.created} />)
    return(
        <div className="comment-container">
          <ul className="comment-list">
            <li className="comment-head">Comments</li>
            {renderComments}
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