import React, { Component } from "react";
import CommentList from '../messageBoard/CommentList';
import NewComment from "./NewComment";

export default class Post extends Component {
  state = {
    display: "none"
  }

  commentFormat = comments => {
    if (comments.length === 1) {
      return "1 comment"
    } else {
      return `${comments.length} comments`
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
        <span className="timestamp"><em>{created} |</em></span><button onClick={() => this.setState({display: ''})}className="timestamp total-comments">{this.commentFormat(comments)}</button>
        </p>
        <CommentList 
          style={this.state.display}
          userID={userID} 
          addComment={addComment} 
          postID={id} 
          comments={comments}
          currentUser={currentUser}
        />
        <NewComment 
          userID={currentUser.id} 
          postID={id} 
          addComment={addComment} 
        />
      </div>
    </article>
    )
  }
};
