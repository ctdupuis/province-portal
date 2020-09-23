import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3>You are signed in as {this.props.currentUser.username}</h3>
            </div>
        )
    }
}
