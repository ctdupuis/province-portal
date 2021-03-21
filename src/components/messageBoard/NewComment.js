import React, { Component } from 'react';

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
      const disabled = this.state.content === "" ? true : false
        return (
          <div className="comment_handler">
            <div className="comment_field">
              <input
                className="comment-input"
                placeholder="Add a comment..."
                type="text"
                onChange={this.handleChange}
              />
            </div>
            <div className="comment_submit_btn">
              <form style={{height: "100%"}} onSubmit={this.handleSubmit}>
              <input 
                className="comment-submit" 
                type="submit" 
                value="Comment"
                disabled={disabled} 
              />
              </form>
            </div>
          </div>
        )
    }
}
