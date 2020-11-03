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
        </p>
        <div style={{ textAlign: 'left'}}>

        <button className="display-new-comment" onClick={() => this.setState({displayForm: ''})}><FaCommentAlt/>  Comment</button>
        </div>
        <CommentList 
          style={this.state.displayList}
          userID={userID} 
          addComment={addComment} 
          postID={id} 
          comments={comments}
          currentUser={currentUser}
        />
        <NewComment 
          style={this.state.displayForm}
          userID={currentUser.id} 
          postID={id} 
          addComment={addComment} 
        />
      </div>
    </article>
    )
  }
};
