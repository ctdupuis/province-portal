import React from 'react';
import Comment from './Comment';
import NewComment from './NewComment';

const CommentList = ({ comments, postID, userID, addComment }) => {
  const conditionalRender = comments => {
    const renderComments = comments.map(comment => <Comment key={comment.id} content={comment.content} author={comment.author} created={comment.created} />)
      if (comments) {
        return renderComments
      } else {
        return(<li className="comment-head">Be the first to Comment</li>)
      }
    }

    return(
        <div className="comment-container">
          <ul className="comment-list">
            {comments ? conditionalRender(comments) : <li className="comment-head">Be the first to Comment</li>}
            <NewComment userID={userID} postID={postID} addComment={addComment} />
          </ul>
        </div>
    )
}

export default CommentList;