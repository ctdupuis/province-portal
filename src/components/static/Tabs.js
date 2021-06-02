import React from "react";
import "../../stylesheets/tabs.css";
import { NavLink } from "react-router-dom";

const Tabs = ({ endSession }) => {
  const activeStyle = {
    backgroundColor: "var(--d-green)",
    borderRadius: "10px",
    transition: "0.3s"
  }
  return (
    <div className="nav-tabs-container">
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/announcements"}
          >
            Announcements
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/messaging"}
          >
            Messaging
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/reports"}
          >
            Reports
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/deliveries"}
          >
            Deliveries
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/inventory"}
          >
            Inventory
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink activeClassName="" to={"/"} onClick={() => endSession()}>
            Log Out
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
