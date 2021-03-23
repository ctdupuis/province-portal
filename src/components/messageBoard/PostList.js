import React, { Component } from 'react'
import Loading from '../static/Loading';
import Post from './Post';

export default class PostList extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    renderPosts = posts => {
        return posts.map((post) => {
            return(<Post
                key={post.id}
                id={post.id}
                content={post.content}
                userID={post.user_id}
                author={post.author}
                created={post.created}
                comments={post.comments}
                addComment={this.props.addComment}
                updateComment={this.props.updateComment}
                removeComment={this.props.removeComment}
                updatePost={this.props.updatePost}
                removePost={this.props.removePost}
                currentUser={this.props.currentUser} 
            />)
        })
    }

    render() {
        const { loading, posts } = this.props;
        return (
            loading ? <Loading /> : 
            this.renderPosts(posts)
        )
    }
}
