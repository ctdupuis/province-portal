import React, { Component } from "react";
import "../../stylesheets/sessions/dashboard.css";
import Loading from '../static/Loading';
import { FaPen } from 'react-icons/fa';


export default class Dashboard extends Component {
  renderAdminBadge(currentUser) {
    return currentUser.admin ? <span className="admin-badge">Admin</span> : null
  }

  render() {
    const { currentUser, loading } = this.props
    return (
      loading ? <Loading /> :
      <section className="dash-container">
        <header className="dash-header">
          <h3>Dashboard | {currentUser.username} {this.renderAdminBadge(currentUser)}</h3>
        </header>
        <div className="dash-content">
          <h5>Welcome, {currentUser.first_name} {currentUser.last_name}</h5>
          <div className="left-side">
            <div className="user-info">
              {currentUser.first_name} {currentUser.last_name}
            </div>
          </div>
          <div className="right-side">
            <FaPen />
          </div>
        </div>
      </section>
    );
  }
}