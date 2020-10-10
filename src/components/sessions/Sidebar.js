import React, { Component } from "react";
import '../../stylesheets/sessions/sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul className="nav-list">
          <li>Announcements</li>
          <li>Delivery Mapper</li>
          <li>Pickups</li>
        </ul>
      </div>
    );
  }
}
