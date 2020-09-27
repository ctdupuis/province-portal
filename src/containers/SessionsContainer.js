import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { getLoginStatus, login, endSession, updateInfo } from '../actions/sessions';
import InfoUpdate from '../components/InfoUpdate';
import Dashboard from '../components/Dashboard';

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
                <Route exact path={'/update-info'}
                    render={ props =>
                        // (!this.props.currentUser) ?
                        <InfoUpdate
                            updateInfo={this.props.updateInfo}
                            currentUser={this.props.currentUser}
                            {...props}
                        />
                        // :
                        // <Redirect to={'/'}
                        //     login={this.props.login}
                        //     {...props}
                        // /> 
                    }
                />
                <Route exact path={'/dashboard'}
                    render={ props =>
                        <Dashboard
                            currentUser={this.props.currentUser}
                        />
                    }
                />
            </React.Fragment>
        )
    }
}

export default connect(
    state => ({
        currentUser: state.userReducer.currentUser
    }),
    {
        getLoginStatus,
        endSession,
        login,
        updateInfo
    }
)(SessionsContainer);