import React, { Component } from "react";
import "../stylesheets/sessions/posts.css";
import Post from "../components/messageBoard/Post";

export default class PostsContainer extends Component {

    renderAllPosts() {
        // this.props.posts.forEach(post => return <Post props={props} />)
    }
    
    render() {
        return (
            <React.Fragment>
                <Post />
                <Post />
            </React.Fragment>
        )
    }
}
