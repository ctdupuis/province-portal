import React, { Component } from 'react'
import Loading from '../static/Loading';
import Post from './Post';

export default class PostList extends Component {
    state = {
        position: ""
    }

    componentDidMount() {
        this.props.getPosts();
        window.addEventListener('scroll', this.listenToScroll)
        let position = localStorage.getItem('positon')
        window.scrollTo(position, 0)
    }
        
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
        localStorage.setItem('position', this.state.position)
    }
        
    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight
        
        const scrolled = winScroll / height
        
        this.setState({
            position: scrolled,
        })
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
