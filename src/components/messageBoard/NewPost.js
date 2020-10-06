import React, { Component } from "react";

export default class NewPost extends Component {
  render() {
    return (
      <article className="post-container">
        <div className="flex-container">
          <div className="input-container">
            <textarea
              type="text"
              placeholder="Share your thoughts..."
              className="comment-input"
            />
          </div>
          <div className="btn-container">
            <button className="comment-submit">Post Message</button>
          </div>
        </div>
      </article>
    );
  }
}
