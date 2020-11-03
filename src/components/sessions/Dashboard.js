import React, { Component } from "react";
import "../../stylesheets/sessions/dashboard.css";
import Loading from '../static/Loading';


export default class Dashboard extends Component {
  renderAdmin(currentUser) {
    return currentUser.admin ? <span className="admin-badge">Admin</span> : null
  }

  render() {
    const { currentUser, loading } = this.props
    return (
      loading ? <Loading /> :
      <section className="dash-container">
        <header className="dash-header">
          <h3>Dashboard - {currentUser.username} {this.renderAdmin(currentUser)}</h3>
        </header>
        <div className="dash-content">
          <h5>Welcome, {currentUser.first_name} {currentUser.last_name}</h5>
        </div>
      </section>
    );
  }
}