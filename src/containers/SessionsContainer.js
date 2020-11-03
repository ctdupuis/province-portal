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
import Announcements from "../components/sessions/Announcements";
import Tabs from "../components/static/Tabs";
import DeliveryMap from "../components/delivery/DeliveryMap";
import Dashboard from "../components/sessions/Dashboard";
import Pickups from "../components/pickups/Pickups";


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
          path={"/announcements"}
          render={(props) => (
            this.props.currentUser ?
            <>
              <Tabs endSession={this.props.endSession}/>
              <Announcements
                currentUser={this.props.currentUser}
                endSession={this.props.endSession}
                posts={this.props.posts}
                addPost={this.props.addPost}
                addComment={this.props.addComment}
                loading={this.props.loading}
                {...props}
              />
            </> :
            <Redirect to={'/'} />
          )}
        />
        <Route
          exact
          path={"/dashboard"}
          render={(props) => (
            this.props.currentUser ?
            <>
              <Tabs endSession={this.props.endSession}/>
              <Dashboard
                currentUser={this.props.currentUser}
                endSession={this.props.endSession}
                loading={this.props.loading}
                {...props}
              />
            </> :
            <Redirect to={'/'} />
          )}
        />
        <Route 
          exact 
          path={"/delivery-map"}
          render={(props) => (
            <>
              <Tabs endSession={this.props.endSession}/>
              <DeliveryMap
                currentUser={this.props.currentUser}
                loading={this.props.loading}
                {...props}
              />
            </>
          )}
        />
        <Route 
          exact 
          path={"/pickups"}
          render={(props) => (
            <>
              <Tabs endSession={this.props.endSession}/>
              <Pickups
                currentUser={this.props.currentUser}
                loading={this.props.loading}
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
    posts: state.postsReducer.posts,
    loading: state.loadReducer.loading
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
