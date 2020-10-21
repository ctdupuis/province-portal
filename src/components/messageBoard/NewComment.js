import React, { Component } from 'react'

export default class NewComment extends Component {
    state = {
        postID: this.props.postID,
        content: '',
        userID: this.props.userID
    }

    handleChange = event => {
        this.setState({ content: event.target.value })
    }

    handleClick = event => {
        this.props.addComment(this.state)
    }

    render() {
        return (
            <div className="comment flex-container">
              <div className="input-container">
                <textarea
                  type="text"
                  placeholder="Leave a comment..."
                  className="comment-input"
                  onChange={this.handleChange}
                />
              </div>
              <div className="btn-container">
                <button 
                  className="comment-submit"
                  onClick={this.handleClick}
                >Post Comment</button>
              </div>
            </div>
        )
    }
}
