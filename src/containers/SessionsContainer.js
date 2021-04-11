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
  getSchedule
} from "../actions/schedules";
import {
  finalizeRoute,
  addStop,
  editStop
} from "../actions/deliveries";
import InfoUpdate from "../components/sessions/InfoUpdate";
import Tabs from "../components/static/Tabs";
import DeliveryMap from "../components/delivery/DeliveryMap";
import Dashboard from "../components/sessions/Dashboard";

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
          path={"/update-info"}
          render={
            (props) => 
              // (!this.props.currentUser) ?
              <InfoUpdate
                updateInfo={this.props.updateInfo}
                currentUser={this.props.currentUser}
                error={this.props.errors}
                {...props}
              />
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
                addStop={this.props.addStop}
                editStop={this.props.editStop}
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
    schedule: state.scheduleReducer.schedule,
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
    finalizeRoute,
    addStop,
    editStop
  }
)(SessionsContainer);
