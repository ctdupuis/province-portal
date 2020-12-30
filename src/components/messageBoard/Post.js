import React, { Component } from "react";
import CommentList from "../messageBoard/CommentList";
import NewComment from "./NewComment";


export default class Post extends Component {
  state = {
    displayList: "none",
    displayForm: "none",
  };

  commentFormat = (comments) => {
    if (comments && comments.length === 1) {
      return "1 comment";
    } else if (comments && comments.length > 1) {
      return `${comments.length} comments`;
    } else {
      return "No comments yet";
    }
  };

  checkOwnership(currentUser, userID) {
    if (currentUser.id === userID) {
      return (
      <div className="edit-delete-container">
        <button className="timestamp total-comments edit">
          Delete
        </button>
        <button className="timestamp total-comments edit">
          Edit
        </button>
      </div>
      );
    }
  }

  displayComments = (event) => {
    if (event.target.innerText !== "No comments yet") {
      this.setState({ displayList: "" });
    }
  };

  render() {
    const {
      content,
      userID,
      author,
      created,
      comments,
      id,
      addComment,
      currentUser,
    } = this.props;
    return (
      <article className="post-container">
        <div className="post-content">
          <div className="post-author">{author}</div>
          <div className="post_text_and_meta_data">
            <div className="post-text">
              {content}
            </div>
            <div className="meta_data">
              <div className="timestamp_wrapper">
                <span className="timestamp">{created} |</span>
                <button onClick={this.displayComments} className="timestamp total-comments">
                  {this.commentFormat(comments)}
                </button>
              </div>
              {this.checkOwnership(currentUser, userID)}
            </div>
          </div>
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
      </article>
    );
  }
}
