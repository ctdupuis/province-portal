import React, { Component } from 'react'

export default class NewComment extends Component {
    state = {
        postID: this.props.postID,
        content: '',
        user_id: this.props.userID
    }

    render() {
        return (
            <div className="comment flex-container">
              <div className="input-container">
                <textarea
                  type="text"
                  placeholder="Leave a comment..."
                  className="comment-input"
                />
              </div>
              <div className="btn-container">
                <button 
                  className="comment-submit"
                >Post Comment</button>
              </div>
            </div>
        )
    }
}
