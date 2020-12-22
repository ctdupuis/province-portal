import React from "react";
import "../../stylesheets/tabs.css";
import { NavLink } from "react-router-dom";

const Tabs = ({ endSession }) => {
  return (
    <div className="nav-tabs-container">
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/dashboard"}
            activeStyle={{ backgroundColor: "var(--d-green)" }}
          >
            Dashboard
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/announcements"}
            activeStyle={{ backgroundColor: "var(--d-green)" }}
          >
            Announcements
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/patient-services"}
            activeStyle={{ backgroundColor: "var(--d-green)" }}
          >
            Patient Services
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/reports"}
            activeStyle={{ backgroundColor: "var(--d-green)" }}
          >
            Report Manager
          </NavLink>
        </div>
      </div>
      <div className="nav-tab">
        <div className="link-container">
          <NavLink
            to={"/deliveries"}
            activeStyle={{ backgroundColor: "var(--d-green)" }}
          >
            Deliveries
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
