import React, { Component } from "react";
import "../stylesheets/sessions/posts.css";
import NewPost from "../components/messageBoard/NewPost";
import PostList from "../components/messageBoard/PostList";

class PostsContainer extends Component {
    
    render() {
        return (
            <React.Fragment>
                <NewPost
                    currentUser={this.props.currentUser} 
                    addPost={this.props.addPost}
                />
                <PostList 
                    posts={this.props.posts}
                    addComment={this.props.addComment}
                    currentUser={this.props.currentUser}
                />
                <article className="post-container">
                    <div className="post-content">
                        <div className="post-author">ABC</div>
                        <div className="post_text_and_meta_data">
                            <div className="post-text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            <div className="meta_data">
                                <div className="timestamp_wrapper">
                                    <span className="timestamp">12/21/20 at 7:09pm |</span>
                                    <button className="timestamp total-comments">No Comments</button>
                                </div>
                                {/* <div className="comments_amt_wrapper">
                                </div> */}
                                <div className="edit-delete-container">
                                    <button className="timestamp total-comments edit">Delete</button>
                                    <button className="timestamp total-comments edit">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-container">
                        <ul className="comment-list">
                            <li className="comment">
                                <div className="comment-author">EDF</div>
                                <div className="comment-text-and-meta-data">
                                    <div className="comment-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </div>
                                    <div className="meta_data">
                                        <div className="timestamp_wrapper">
                                            <span className="timestamp">12/21/20 at 7:09pm</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="comment">
                                <div className="comment-author">GHI</div>
                                <div>
                                    This is the second comment
                                </div>
                            </li>
                            <li className="comment">
                                <div className="comment-author">JKL</div>
                                <div>
                                    This is the third comment
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="comment_handler">
                        {/* <div className="form_toggler">
                            <button className="display-new-comment">Comment</button>
                        </div> */}
                        <div className="comment_field">
                            <input className="comment-input" placeholder="Add comment..." type="text"/>
                        </div>
                        <div className="comment_submit_btn">
                            <input className="comment-submit" type="submit" value="Comment" />
                        </div>
                    </div>
                    
                </article>
            </React.Fragment>
        )
    }
}

export default PostsContainer;