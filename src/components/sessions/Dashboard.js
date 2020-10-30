import React, { Component } from "react";
import "../../stylesheets/sessions/dashboard.css";
import Loading from '../static/Loading';


export default class Dashboard extends Component {

  render() {
    return (
      this.props.loading ? <Loading /> :
      <section className="dash-container">
        <header className="dash-header">
          <h3>Dashboard</h3>
        </header>
          <h5>Welcome, {this.props.currentUser.first_name}</h5>
        
      </section>
    );
  }
}