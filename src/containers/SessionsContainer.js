import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "../components/sessions/Login";
import { connect } from "react-redux";
import {
  getLoginStatus,
  login,
  endSession,
  updateInfo,
} from "../actions/sessions";
import {
  getPosts,
  addPost,
  addComment
} from "../actions/posts";
import InfoUpdate from "../components/sessions/InfoUpdate";
import Dashboard from "../components/sessions/Dashboard";
import Sidebar from "../components/sessions/Sidebar";

class SessionsContainer extends Component {
  componentDidMount() {
    this.props.getLoginStatus();
    this.props.getPosts();
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path={"/"}
          render={(props) =>
            !this.props.currentUser ? (
              <Login
                login={this.props.login}
                error={this.props.errors}
                {...props}
              />
            ) : (
              <Redirect to={"/dashboard"} />
            )
          }
        />
        <Route
          exact
          path={"/update-info"}
          render={
            (props) => (
              // (!this.props.currentUser) ?
              <InfoUpdate
                updateInfo={this.props.updateInfo}
                currentUser={this.props.currentUser}
                error={this.props.errors}
                {...props}
              />
            )
            // :
            // <Redirect to={'/'}
            //     login={this.props.login}
            //     {...props}
            // />
          }
        />
        <Route
          exact
          path={"/dashboard"}
          render={(props) => (
            <>
              {/* <Sidebar /> */}
              <Dashboard
                currentUser={this.props.currentUser}
                endSession={this.props.endSession}
                posts={this.props.posts}
                addPost={this.props.addPost}
                // getPosts={this.props.getPosts}
                {...props}
              />
            </>
          )}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => ({
    currentUser: state.userReducer.currentUser,
    errors: state.userReducer.errors,
    posts: state.postsReducer.posts
  }),
  {
    getLoginStatus,
    endSession,
    login,
    updateInfo,
    getPosts,
    addPost,
    addComment
  }
)(SessionsContainer);
