import React, { Component } from "react";

export default class NewUser extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    admin: false,
  };

  handleChange = ({ target: { value, name } }) => {
    if (name === "phone") {
      this.setState((prevState) => ({
        phone: this.numberFormat(value, prevState.phone),
      }));
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  numberFormat = (value, previousValue) => {
    if (!value) return value;

    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;

    if (!previousValue || value.length > previousValue.length) {
      if (cvLength < 4) return currentValue;
      if (cvLength < 7)
        return `(${currentValue.slice(0, 3)} ${currentValue.slice(3)}`;
      return `(${currentValue.slice(0, 3)}) ${currentValue.slice(
        3,
        6
      )}-${currentValue.slice(6, 10)}`;
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createUser(this.state);
  };

  setAdmin = event => {
    this.setState(prevState => ({
      ...prevState,
      admin: !prevState.admin
    }))
  }

  render() {
    return (
      <>
        <div className="user-info-title">
          <h3>Add a New User</h3>
        </div>
        <form className="new-user-form" onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={this.state.username}
            required
          />
          <br />

          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            onChange={this.handleChange}
            value={this.state.first_name}
            required
          />
          <br />

          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            onChange={this.handleChange}
            value={this.state.last_name}
            required
          />
          <br />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <br />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <br />

          <label htmlFor="admin">Administrator</label>
          <input 
            name="admin"
            type="checkbox"
            onChange={this.setAdmin}
            checked={this.state.admin}
          />

          <input className="new-user-sbmt" type="submit" value="Create User" />
        </form>
      </>
    );
  }
}
