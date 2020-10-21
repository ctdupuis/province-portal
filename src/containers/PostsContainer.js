import React, { Component } from "react";
import "../stylesheets/sessions/posts.css";
import NewPost from "../components/messageBoard/NewPost";
import PostList from "../components/messageBoard/PostList";

class PostsContainer extends Component {
    
    render() {
        return (
            <React.Fragment>
                <NewPost
                    currentUser={this.props.currentUser} 
                    addPost={this.props.addPost}
                />
                <PostList 
                    posts={this.props.posts}
                    addComment={this.props.addComment}
                />
            </React.Fragment>
        )
    }
}

export default PostsContainer;