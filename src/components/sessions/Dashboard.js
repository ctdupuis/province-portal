import React, { Component } from "react";
import PostsContainer from "../../containers/PostsContainer";
import "../../stylesheets/sessions/dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <section className="dash-container">
        <header className="dash-header">
          <h3>Message Board</h3>
        </header>
        <PostsContainer />
        <button onClick={() => this.props.endSession(this.props.history)}>
          Log Out
        </button>
      </section>
    );
  }
}
