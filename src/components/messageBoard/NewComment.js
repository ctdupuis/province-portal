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
    
    handleSubmit = event => {
      event.preventDefault();
      this.props.addComment(this.state);
      this.setState({ 
        ...this.state,
        content: ''
      })
    }
    
    render() {
        return (
            <>
              <div style={{ display: this.props.style }} className="input-container">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="comment-input"
                  onChange={this.handleChange}
                />
              </div>
              <div className="btn-container">
                <form onSubmit={this.handleSubmit}>
                  <input
                    style={{ display: this.props.style }}
                    type="submit" 
                    className="comment-submit"
                    value="Post"
                  />
                </form>
              </div>
    </>
        )
    }
}
