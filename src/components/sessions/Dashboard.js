import React, { Component } from "react";
import "../../stylesheets/sessions/dashboard.css";
import Loading from '../static/Loading';
import { FaPen } from 'react-icons/fa';
import ContactList from "./ContactList";


export default class Dashboard extends Component {
  renderAdminBadge(currentUser) {
    return currentUser.admin ? <span className="admin-badge">Admin</span> : null
  }

  adminCheck(currentUser) {
    return currentUser.admin
  }

  render() {
    const { currentUser, loading } = this.props
    return (
      loading ? <Loading /> :
      <section className="dash-container">
        <header className="dash-header">
          <h3>{currentUser.first_name} {currentUser.last_name} | {currentUser.username} {this.renderAdminBadge(currentUser)}</h3>
        </header>
        <div className="dash-content">
            <div className="user-info-title">
              Your Contact Info
            </div>
            <div className="user-info-content">
              Email: emailaddress@website.com
              <button className="edit-info">
                <FaPen />
              </button>
            </div>
            <div className="user-info-content">
              Phone: 337-555-6666
              <button className="edit-info">
                <FaPen />
              </button>
            </div>
        </div>
            <div className="dash-content">
              <div className="user-info-title">
                Employee Contact List
              </div>
              <ContactList contacts={this.props.contacts}/>
            </div>
              {this.adminCheck(currentUser) ? 
              (<div className="dash-content">
                <div className="user-info-title">
                  Add a New User
                </div>
              </div>
              ) : null }
      </section>
    );
  }
}