import React from 'react';
import Comment from './Comment';
import NewComment from './NewComment';
import Loading from '../static/Loading';

const CommentList = ({ comments, postID, userID, addComment, currentUser }) => {
  const conditionalRender = comments => {
    const renderComments = comments.map(comment => <Comment key={comment.id} content={comment.content} author={comment.author} created={comment.created} />)
      if (!comments.length) {
        return(<li className="comment-head">Be the first to Comment</li>)
      } else {
        return renderComments
      }
    }

    return(
        <div className="comment-container">
          <ul className="comment-list">
            {comments ? conditionalRender(comments) : <Loading />}
            <NewComment 
              userID={currentUser.id} 
              postID={postID} 
              addComment={addComment} 
            />
          </ul>
        </div>
    )
}

export default CommentList;