import React, { Component } from "react";
import "../stylesheets/sessions/posts.css";
import NewPost from "../components/messageBoard/NewPost";
import PostList from "../components/messageBoard/PostList";
import {
    getPosts,
    addPost,
    updatePost,
    removePost,
    addComment,
    updateComment,
    removeComment
} from '../actions/posts';
import {
    endSession
} from '../actions/sessions';
import Tabs from "../components/static/Tabs";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

class PostsContainer extends Component {
    componentDidMount() {
        this.props.getPosts();
    }
    
    render() {
        return (
            <Route 
                exact
                path={'/announcements'}
                render={(props) => (
                    this.props.currentUser ? 
                    <>
                        <Tabs endSession={this.props.endSession}/>
                        <NewPost
                            currentUser={this.props.currentUser} 
                            addPost={this.props.addPost}
                            {...props}
                        />
                        <PostList 
                            posts={this.props.posts}
                            addComment={this.props.addComment}
                            updatePost={this.props.updatePost}
                            removePost={this.props.removePost}
                            currentUser={this.props.currentUser}
                            loading={this.props.loading}
                            {...props}
                        />
                    </>
                    :
                    <Redirect to={'/'} />
                )}
            />
        )
    }
}

export default connect(
    (state) => ({
        currentUser: state.userReducer.currentUser,
        errors: state.userReducer.errors,
        posts: state.postsReducer.posts,
        loading: state.loadReducer.loading
    }),
    {
        getPosts,
        addPost,
        updatePost,
        removePost,
        addComment,
        endSession
    }
)(PostsContainer);