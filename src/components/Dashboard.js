import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <section className="dash-container">
                <header className="dash-header">
                    <div>Announcements</div>
                </header>
                <article className="announcement-content">
                    
                </article>
                {/* <h3>You are signed in as {this.props.currentUser.username}</h3> */}
                {/* Drop the AnnouncementsContainer here */}
                <button onClick={() => this.props.endSession(this.props.history)} >Log Out</button>
            </section>
        )
    }
}
