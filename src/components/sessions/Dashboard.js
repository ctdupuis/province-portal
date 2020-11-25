import React, { Component } from "react";
import "../../stylesheets/sessions/dashboard.css";
import Loading from '../static/Loading';
import { FaPen } from 'react-icons/fa';
import ContactList from "./ContactList";
import NewUser from "./NewUser";
import DeleteUser from "./DeleteUser";


export default class Dashboard extends Component {
  componentDidMount() {
    this.props.getPosts();
    this.props.getContacts();
  }

  state = {
    toggleEmailInput: false,
    togglePhoneInput: false,
    email: '',
    phone: '',
    username: this.props.currentUser.username
  }

  renderAdminBadge(currentUser) {
    return currentUser.admin ? <span className="admin-badge">Admin</span> : null
  }

  adminCheck(currentUser) {
    return currentUser.admin
  }

  handleChange = ({ target: { value, name } })=> {
    if (name === "phone") {
      this.setState(prevState => ({ phone: this.numberFormat(value, prevState.phone) }))
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  numberFormat = (value, previousValue) => {
    if (!value) return value;
    
    const currentValue = value.replace(/[^\d]/g, '');
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 4) return currentValue;
      if (cvLength < 7) return `(${currentValue.slice(0, 3)} ${currentValue.slice(3)}`;
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
    }
  }

  handleClick = event => {
    this.props.updateInfo(this.state, this.props.history)
  }

  toggleEmailInput = () => {
    this.setState({
      toggleEmailInput: !this.state.toggleEmailInput,
      email: '',
    })
  }

  togglePhoneInput = () => {
    this.setState({
      togglePhoneInput: !this.state.togglePhoneInput,
      phone: '',
    })
  }

  renderEmail = (currentUser) => {
    if (currentUser.email) {
      return currentUser.email
    } else {
      return "No email on file"
    }
  }

  renderPhone = (currentUser) => {
    if (currentUser.phone) {
      return currentUser.phone
    } else {
      return "No phone number on file"
    }
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
              Email: {this.state.toggleEmailInput ? 
              <>
                <input 
                  name="email" 
                  className="user-input" 
                  type="email" 
                  placeholder="Enter email..." 
                  onChange={this.handleChange}
                /> 
                <button className="info-cancel" onClick={this.toggleEmailInput}>Cancel</button>
                <button className="info-save" onClick={this.handleClick}>Save Changes</button>
              </>
              : 
              <>
              {this.renderEmail(currentUser)}
                <button className="edit-info">
                  <FaPen onClick={this.toggleEmailInput}/>
                </button>
              </>}
            </div>
            <div className="user-info-content">
              Phone: {this.state.togglePhoneInput ? 
              <>
                <input 
                  name="phone" 
                  className="user-input" 
                  type="tel" 
                  placeholder="Enter phone..." 
                  value={this.state.phone}
                  onChange={this.handleChange}
                /> 
                <button className="info-cancel" onClick={this.togglePhoneInput}>Cancel</button>
                <button className="info-save" onClick={this.handleClick}>Save Changes</button>
              </>
              : 
              <>
              {this.renderPhone(currentUser)}
                <button className="edit-info">
                  <FaPen onClick={this.togglePhoneInput}/>
                </button>
              </>}
            </div>
        </div>
            <div className="dash-content">
              <div className="user-info-title">
                Employee Contact List
              </div>
              <ContactList contacts={this.props.contacts} />
            </div>
              {this.adminCheck(currentUser) ? 
              (
              <div className="dash-content">
                <NewUser createUser={this.props.createUser} />
                <DeleteUser currentUser={this.props.currentUser} contacts={this.props.contacts} />
              </div>
              ) : null }
              <div className="dash-content">
                <div className="user-info-title">
                  Employee Schedule
                </div>
                <p>Coming soon!</p>
              </div>
      </section>
    );
  }
}