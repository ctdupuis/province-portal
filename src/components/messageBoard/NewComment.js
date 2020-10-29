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
        event.preventDefault();
        this.props.addComment(this.state);
        this.setState({ 
          ...this.state,
          content: ''
        })
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
                <form onSubmit={this.handleSubmit}>

                <input
                  type="submit" 
                  className="comment-submit"
                  onClick={this.handleClick}
                  value="Post Comment"
                />
                </form>
              </div>
            </div>
        )
    }
}
