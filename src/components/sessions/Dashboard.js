import React, { Component } from "react";
import "../../stylesheets/sessions/dashboard.css";
import Loading from '../static/Loading';
import { FaPen } from 'react-icons/fa';
import ContactList from "./ContactList";


export default class Dashboard extends Component {
  state = {
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state)
  }

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
                  Add a New User <strong>Separate this into its own component</strong>
                </div>
                <form className="new-user-form" onSubmit={this.handleSubmit}>
                  <label htmlFor="username">Username:</label>
                  <input 
                    type="text" 
                    name="username"
                    onChange={this.handleChange}
                  />
                  <br />

                  <label>First Name</label>
                  <input 
                    type="text" 
                    name="first_name" 
                    onChange={this.handleChange}
                  />
                  <br />

                  <label htmlFor="last_name">Last Name</label>
                  <input 
                    type="text" 
                    name="last_name" 
                    onChange={this.handleChange}
                  />
                  <br />

                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    name="password" 
                    onChange={this.handleChange}
                  />
                  <br />

                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    onChange={this.handleChange}
                  />
                  <br />

                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    onChange={this.handleChange} 
                  />
                  <br />

                  <input className="new-user-sbmt" type="submit" value="Create" />
                </form>
              </div>
              ) : null }
      </section>
    );
  }
}