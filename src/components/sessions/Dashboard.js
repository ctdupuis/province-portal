import React, { Component } from "react";
import PostsContainer from "../../containers/PostsContainer";
import "../../stylesheets/sessions/dashboard.css";
import Loading from '../static/Loading';


export default class Dashboard extends Component {

  render() {
    return (
      this.props.loading ? <Loading /> :
      <section className="dash-container">
        <header className="dash-header">
          <h3>Message Board</h3>
        </header>
        <PostsContainer
          posts={this.props.posts} 
          currentUser={this.props.currentUser}
          addPost={this.props.addPost}
          addComment={this.props.addComment}
        />
      </section>
    );
  }
}
