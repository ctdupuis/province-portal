import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/Login';

export default class SessionsContainer extends Component {
    componentDidMount() {
        fetch('http://localhost:5000/logged_in')
        .then(r => r.json())
        .then(j => console.log(j))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path={'/'} component={Login} />
            </React.Fragment>
        )
    }
}
