import React, { Component } from "react";
import "../stylesheets/sessions/posts.css";
import { connect } from 'react-redux';
import Post from "../components/messageBoard/Post";
import NewPost from "../components/messageBoard/NewPost";
import { 
    getPosts
} from '../actions/posts';
class PostsContainer extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

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

export default connect(
    (state) => ({
        currentUser: state.userReducer.currentUser,
        posts: state.postsReducer.posts,
        errors: state.postsReducer.errors
    }), 
    {
        getPosts
    }
)(PostsContainer);