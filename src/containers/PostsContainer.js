import React, { Component } from "react";
import "../stylesheets/sessions/posts.css";
import Post from "../components/messageBoard/Post";
import NewPost from "../components/messageBoard/NewPost";

export default class PostsContainer extends Component {

    renderAllPosts() {
        // this.props.posts.forEach(post => return <Post props={props} />)
    }
    
    render() {
        return (
            <React.Fragment>
                <NewPost />
                <Post />
                <Post />
            </React.Fragment>
        )
    }
}
