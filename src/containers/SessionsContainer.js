import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { getLoginStatus, login, endSession } from '../actions/sessions';

class SessionsContainer extends Component {
    componentDidMount() {
        this.props.getLoginStatus();
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path={'/'} 
                    render={ props => 
                        <Login 
                            login={this.props.login} 
                            {...props} 
                        />
                    } 
                />
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({
        currentUser: state.currentUser,
        errors: state.userReducer.errors
    }),
    {
        getLoginStatus,
        endSession,
        login
    }
)(SessionsContainer);