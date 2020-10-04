import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <section className="dash-container">
                <header className="dash-header">
                    <h3>Posts</h3>
                </header>
                <article className="post-container">
                    <div className="post-content">
                        <div className="post-author">
                            CTD
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="comment-container">
                            <ul className="comment-list">
                                <li className="comment-head">Comments</li>
                                <div className="comment">
                                    <li>Comment</li>
                                </div>
                                <div className="comment">
                                    <li>Comment</li>
                                </div>
                                <div className="comment">
                                    <li>Comment</li>
                                </div>
                                <div className="comment">
                                    <li>Comment</li>
                                </div>
                                <div className="comment flex-container">
                                    <div className="input-container"  >
                                        <textarea type="text" placeholder="Leave a comment..." className="comment-input" />
                                    </div>
                                    <div className="btn-container">
                                        <button className="comment-submit">Post Comment</button>    
                                    </div>    
                                </div>
                            </ul>

                        </div>
                    </div>
                    <div className="post-content">
                        <div className="post-author">
                            ESS
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="post-content">
                        <div className="post-author">
                            MP
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </article>
                {/* <h3>You are signed in as {this.props.currentUser.username}</h3> */}
                {/* Drop the AnnouncementsContainer here */}
                <button onClick={() => this.props.endSession(this.props.history)} >Log Out</button>
            </section>
        )
    }
}
