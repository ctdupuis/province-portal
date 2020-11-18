import React, { Component } from "react";
import "../../stylesheets/sessions/dashboard.css";
import Loading from '../static/Loading';
import { FaPen } from 'react-icons/fa';
import ContactList from "./ContactList";
import NewUser from "./NewUser";


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
              <button className="edit-info">Edit</button>
            </div>
            <div className="user-info-content">
              Email: {currentUser.email ? currentUser.email : "No email on file"}
              <button className="edit-info">
                <FaPen />
              </button>
            </div>
            <div className="user-info-content">
              Phone: {currentUser.phone ? currentUser.phone : "No phone number on file"}
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
              (<NewUser createUser={this.props.createUser} />
              ) : null }
      </section>
    );
  }
}