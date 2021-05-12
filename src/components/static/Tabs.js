import React from "react";
import "../../stylesheets/tabs.css";
import { NavLink } from "react-router-dom";

const Tabs = ({ endSession }) => {
  const activeStyle = {
    backgroundColor: "var(--d-green)",
    borderRadius: "10px",
    transition: "0.5s"
  }
  return (
    <div className="nav-tabs-container">
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/dashboard"}
            activeStyle={activeStyle}
          >
            Dashboard
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/announcements"}
            activeStyle={activeStyle}
          >
            Announcements
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/patient-services"}
            activeStyle={activeStyle}
          >
            Messaging
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/reports"}
            activeStyle={activeStyle}
          >
            Reports
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/deliveries"}
            activeStyle={activeStyle}
          >
            Deliveries
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/inventory"}
            activeStyle={activeStyle}
          >
            Inventory
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink to={"/dashboard"} onClick={() => endSession()}>
            Log Out
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
