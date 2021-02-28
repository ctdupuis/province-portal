import React from 'react';
import Comment from './Comment';
import Loading from '../static/Loading';

const CommentList = ({ comments, postID, userID, addComment, currentUser, style }) => {
  const conditionalRender = comments => {
    const renderComments = comments.map(comment => 
    <Comment key={comment.id} 
      currentUser={currentUser}
      content={comment.content} 
      author={comment.author} 
      created={comment.created} 
      postID={postID}
      userID={userID}
    />
    )
      if (!comments.length) {
        return null
      } else {
        return renderComments
      }
    }

    return(
        <div className="comment-container" style={{display: style}}>
          <ul className="comment-list" >
            {comments ? conditionalRender(comments) : <Loading />}
          </ul>
        </div>
    )
}

export default CommentList;