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
                        getPosts={this.props.getPosts}
                            posts={this.props.posts}
                            updatePost={this.props.updatePost}
                            removePost={this.props.removePost}
                            addComment={this.props.addComment}
                            updateComment={this.props.updateComment}
                            removeComment={this.props.removeComment}
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
        updateComment,
        removeComment,
        endSession
    }
)(PostsContainer);