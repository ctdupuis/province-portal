import React from 'react';
import Comment from './Comment';
import NewComment from './NewComment';

const CommentList = ({ comments, postID, userID }) => {
    const renderComments = comments.map(comment => <Comment content={comment.content} author={comment.author} created={comment.created} />)
    const conditionalRender = comments => {
      if (comments) {
        return(<li className="comment-head">Comments</li>)
      } else {
        return(<li className="comment-head">Be the first to Comment</li>)
      }
    }

    return(
        <div className="comment-container">
          <ul className="comment-list">
            <li className="comment-head">Comments</li>
            {renderComments}
            <NewComment userID={userID} postID={postID} />
          </ul>
        </div>
    )
}

export default CommentList;