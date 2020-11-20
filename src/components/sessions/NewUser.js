import React, { Component } from "react";

export default class NewUser extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    admin: false
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createUser(this.state);
  };

  render() {
    return (
      <>
        <div className="user-info-title">
          Add a New User
        </div>
        <form className="new-user-form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={this.handleChange} />
          <br />

          <label>First Name</label>
          <input type="text" name="first_name" onChange={this.handleChange} />
          <br />

          <label htmlFor="last_name">Last Name</label>
          <input type="text" name="last_name" onChange={this.handleChange} />
          <br />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={this.handleChange} />
          <br />

          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" onChange={this.handleChange} />
          <br />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" onChange={this.handleChange} />
          <br />

          <input className="new-user-sbmt" type="submit" value="Create User" />
        </form>
      </>
    );
  }
}
