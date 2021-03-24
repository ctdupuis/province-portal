import React, { Component } from "react";
import CommentList from "../messageBoard/CommentList";
import NewComment from "./NewComment";
import { FaPen, FaTrash } from 'react-icons/fa';
import Loading from '../static/Loading';


export default class Post extends Component {
  state = {
    displayList: "none",
    displayForm: "none",
    isEditing: false,
    content: ""
  };


  toggleEdit = () => {
    this.setState({
      ...this.state,
      isEditing: !this.state.isEditing
    })
  }

  commentFormat = (comments) => {
    if (comments && comments.length === 1) {
      return "1 comment";
    } else if (comments && comments.length > 1) {
      return `${comments.length} comments`;
    } else {
      return "No comments yet";
    }
  };

  checkOwnership(currentUser, userID, postID) {
    if (currentUser.id === userID) {
      return (
      <div className="edit-delete-container">
        {this.state.isEditing ? 
          <>
            <button className="info-cancel" onClick={this.toggleEdit}>Cancel</button>
            <button className="info-save" onClick={() => this.props.updatePost({ id: postID, content: this.state.content })}>Save</button>
          </>
          :
          <>
            <button className="timestamp total-comments delete-info" onClick={() => this.handleDelete(postID)}>
              <FaTrash />
            </button>
            <button className="timestamp total-comments edit-info" onClick={this.toggleEdit}>
              <FaPen />
            </button>
          </>
          }
      </div>
      );
    }
  }

  displayComments = (event) => {
    if (event.target.innerText !== "No comments yet") {
      this.setState({ displayList: "" });
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleDelete = postID => {
    if (window.confirm("Are you sure?\nThis action cannot be undone.")) {
      this.props.removePost(postID)
    }
  }

  render() {
    const {
      content,
      userID,
      author,
      created,
      comments,
      id,
      addComment,
      updateComment,
      removeComment,
      currentUser,
    } = this.props;
    return (
      <article className="post-container">
        <div className="post-content">
          <div className="post-author">{author}</div>
          <div className="post_text_and_meta_data">
            { this.state.isEditing ? 
              <div className="post-text">
                <input 
                  defaultValue={content} 
                  name="content"
                  onChange={this.handleChange}
                  className="edit-input"
                />
              </div>
              :
              <div className="post-text">
                {content}
              </div>
            }
            <div className="meta_data">
              <div className="timestamp_wrapper">
                <span className="timestamp">{created} |</span>
                <button onClick={this.displayComments} className="timestamp total-comments">
                  {this.commentFormat(comments)}
                </button>
              </div>
              {this.checkOwnership(currentUser, userID, id)}
            </div>
          </div>
        </div>
        <CommentList 
          style={this.state.displayList}
          addComment={addComment} 
          updateComment={updateComment}
          removeComment={removeComment}
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
