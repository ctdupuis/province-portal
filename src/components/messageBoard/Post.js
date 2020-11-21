import React, { Component } from "react";
import CommentList from '../messageBoard/CommentList';
import NewComment from "./NewComment";
import { FaCommentAlt } from 'react-icons/fa';

export default class Post extends Component {
  state = {
    displayList: "none",
    displayForm: "none"
  }

  commentFormat = comments => {
    if (comments && comments.length === 1) {
      return "1 comment"
    } else if (comments && comments.length > 1) {
      return `${comments.length} comments`
    } else {
      return 'No comments yet'
    }
  }

  checkOwnership(currentUser, userID) {
    if (currentUser.id === userID) {
      return(
        <>
          <button className="timestamp total-comments edit">Delete</button>
          <button className="timestamp total-comments edit">Edit</button>
        </>
      )
    }
  }

  render() {
    const { content, userID, author, created, comments, id, addComment, currentUser } = this.props;
    return(
      <article className="post-container">
      <div className="post-content">
        <div className="post-author">{author}</div>
        <p className="post-text">
          {content}
          <br />
        <span className="timestamp"><em>{created} |</em></span><button onClick={() => this.setState({displayList: ''})}className="timestamp total-comments">{this.commentFormat(comments)}</button>
        {this.checkOwnership(currentUser, userID)}
        </p>
        {/* <div style={{ textAlign: 'left'}}>

        </div> */}
        <CommentList 
          style={this.state.displayList}
          userID={userID} 
          addComment={addComment} 
          postID={id} 
          comments={comments}
          currentUser={currentUser}
        />
        <button className="display-new-comment" onClick={() => this.setState({displayForm: ''})}><FaCommentAlt/>  Comment</button>
        <div className="comment flex-container">
        <NewComment 
          style={this.state.displayForm}
          userID={currentUser.id} 
          postID={id} 
          addComment={addComment} 
        />
        </div>
      </div>
    </article>
    )
  }
};
