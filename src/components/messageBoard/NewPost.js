import React, { Component } from "react";

export default class NewPost extends Component {
  state = {
    content: '',
    userID: this.props.currentUser.id
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state)
    this.setState({
      content: ''
    })
  }


  render() {
    const disabled = this.state.content === "" ? true : false
    return (
      <article className="post-container">
        <div className="new-post-container">
          <div className="input-container">
            <input
              type="text"
              placeholder="Share your thoughts..."
              className="comment-input"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
          </div>
          <div className="btn-container">
            <button 
            onClick={this.handleSubmit} 
            disabled={disabled}
            className="comment-submit"
            >
              Post Message
            </button>
          </div>
        </div>
      </article>
    );
  }
}
