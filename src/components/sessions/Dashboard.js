import React, { Component } from 'react';
import '../../stylesheets/sessions/dashboard.css';

export default class Dashboard extends Component {
    render() {
        return (
            <section className="dash-container">
                <header className="dash-header">
                    <h3>Message Board</h3>
                </header>
                <article className="post-container">
                    <div className="post-content">
                        <div className="post-author">
                            CTD
                        </div>
                        <p className="post-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="comment-container">
                            <ul className="comment-list">
                                <li className="comment-head">Comments</li>
                                <div className="comment">
                                    <div className="post-author">
                                        PM
                                    </div>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                </div>
                                <div className="comment">
                                    <div className="post-author">
                                        CBS
                                    </div>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                </div>
                                <div className="comment">
                                    <div className="post-author">
                                        BCS
                                    </div>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                                </div>
                                <div className="comment">
                                    <div className="post-author">
                                        AEJ
                                    </div>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
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
                    {/* end of first post */}

                    <div className="post-content">
                        <div className="post-author">
                            CTD
                        </div>
                        <p className="post-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="comment-container">
                            <ul className="comment-list">
                                <li className="comment-head">Be the first to leave a comment</li>
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
                    {/* end of second post */}

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
