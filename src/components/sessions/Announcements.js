import React, { Component } from "react";
import PostsContainer from "../../containers/PostsContainer";
import "../../stylesheets/sessions/dashboard.css";
import Loading from '../static/Loading';


export default class Announcements extends Component {
  componentDidMount() {
    this.updateTitle();
  }

  updateTitle = () => {
    const firstLetter = this.props.match.path.replace("/", "").charAt(0).toUpperCase()
    const restOfTitle = this.props.match.path.slice(2, this.props.match.path.length)
    document.title = `${firstLetter}${restOfTitle} | Province Portal`
  }

  render() {
    return (
      this.props.loading ? <Loading /> :
      <section className="dash-container">
        <header className="dash-header">
          <h3>Announcements</h3>
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
