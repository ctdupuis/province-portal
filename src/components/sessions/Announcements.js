import React, { Component } from "react";
import PostsContainer from "../../containers/PostsContainer";
import "../../stylesheets/sessions/dashboard.css";
import Loading from '../static/Loading';


export default class Announcements extends Component {
  componentDidMount() {
    this.updateTitle();
    this.props.getPosts();
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
        <PostsContainer
          posts={this.props.posts} 
          currentUser={this.props.currentUser}
          addPost={this.props.addPost}
          updatePost={this.props.updatePost}
          addComment={this.props.addComment}
        />
      </section>
    );
  }
}
