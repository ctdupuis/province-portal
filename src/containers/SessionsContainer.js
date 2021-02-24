import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "../components/sessions/Login";
import { connect } from "react-redux";
import {
  getLoginStatus,
  login,
  endSession,
  updateInfo,
  createUser,
  removeUser,
  getContacts
} from "../actions/sessions";
import {
  getPosts,
  addPost,
  addComment,
  updatePost
} from "../actions/posts";
import {
  getSchedule
} from "../actions/schedules";
import {
  getConversation,
  createMessage,
  addMessage
} from "../actions/patient-services";
import {
  finalizeRoute
} from "../actions/deliveries";
import {
  getItems,
  addItems
} from "../actions/items";
import { createCheckEntry } from "../actions/log-entries";
import InfoUpdate from "../components/sessions/InfoUpdate";
import Announcements from "../components/sessions/Announcements";
import Tabs from "../components/static/Tabs";
import DeliveryMap from "../components/delivery/DeliveryMap";
import Dashboard from "../components/sessions/Dashboard";
import PatientServices from "../components/patient-services/PatientServices";
import ReportManager from "../components/reports/ReportManager";
import Inventory from "../components/inventory/Inventory";


class SessionsContainer extends Component {
  componentDidMount() {
    this.props.getLoginStatus();
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
          path={"/patient-services"}
          render={(props) => (
            this.props.currentUser ?
            <>
              <Tabs endSession={this.props.endSession}/>
              <PatientServices
                currentUser={this.props.currentUser}
                endSession={this.props.endSession}
                getConversation={this.props.getConversation}
                messages={this.props.messages}
                createMessage={this.props.createMessage}
                addMessage={this.props.addMessage}
                loading={this.props.loading}
                {...props}
              />
            </> :
            <Redirect to={'/'} />
          )}
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
                getPosts={this.props.getPosts}
                updatePost={this.props.updatePost}
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
                contacts={this.props.contacts}
                schedule={this.props.schedule}
                getSchedule={this.props.getSchedule}
                endSession={this.props.endSession}
                loading={this.props.loading}
                createUser={this.props.createUser}
                removeUser={this.props.removeUser}
                updateInfo={this.props.updateInfo}
                getContacts={this.props.getContacts}
                {...props}
              />
            </> :
            <Redirect to={'/'} />
          )}
        />
        <Route 
          exact 
          path={"/deliveries"}
          render={(props) => (
            <>
              <Tabs endSession={this.props.endSession}/>
              <DeliveryMap
                currentUser={this.props.currentUser}
                finalizeRoute={this.props.finalizeRoute}
                loading={this.props.loading}
                {...props}
              />
            </>
          )}
        />
        <Route 
          exact 
          path={"/reports"}
          render={(props) => (
            <>
              <Tabs endSession={this.props.endSession}/>
              <ReportManager
                currentUser={this.props.currentUser}
                loading={this.props.loading}
                createCheckEntry={this.props.createCheckEntry}
                {...props}
              />
            </>
          )}
        />
        <Route 
          exact 
          path={"/inventory"}
          render={(props) => (
            <>
              <Tabs endSession={this.props.endSession}/>
              <Inventory
                currentUser={this.props.currentUser}
                getItems={this.props.getItems}
                addItems={this.props.addItems}
                items={this.props.items}
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
    contacts: state.userReducer.contacts,
    errors: state.userReducer.errors,
    posts: state.postsReducer.posts,
    schedule: state.scheduleReducer.schedule,
    messages: state.messagesReducer.messages,
    items: state.itemsReducer.items,
    loading: state.loadReducer.loading
  }),
  {
    getLoginStatus,
    endSession,
    login,
    updateInfo,
    createUser,
    removeUser,
    getContacts,
    getSchedule,
    getPosts,
    addPost,
    updatePost,
    addComment,
    getConversation,
    createMessage,
    addMessage,
    finalizeRoute,
    getItems,
    addItems,
    createCheckEntry
  }
)(SessionsContainer);
