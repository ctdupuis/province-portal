import React, { Component } from 'react';
import "../stylesheets/sessions/patient-services.css";
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    getMessages,
    createMessage,
    addMessage,
    removeMessage,
    wipeMessages
} from "../actions/patient-services";
import { endSession } from "../actions/sessions";
import Tabs from '../components/static/Tabs';
import PatientServices from '../components/patient-services/PatientServices';

class MessagesContainer extends Component {
    render() {
        return (
            <Route 
                exact
                path={'/patient-services'}
                render={(props) => (
                    this.props.currentUser ? 
                    <>
                        <Tabs endSession={this.props.endSession}/>
                        <PatientServices
                            currentUser={this.props.currentUser}
                            endSession={this.props.endSession}
                            getMessages={this.props.getMessages}
                            messages={this.props.messages}
                            createMessage={this.props.createMessage}
                            addMessage={this.props.addMessage}
                            removeMessage={this.props.removeMessage}
                            wipeMessages={this.props.wipeMessages}
                            loading={this.props.loading}
                            {...props}
                        />
                    </>
                    :
                    <Redirect to={'/'} />
                )}
            />
        )
    }
}

export default connect(
    (state) => ({
        currentUser: state.userReducer.currentUser,
        messages: state.messagesReducer.messages,
    }),
    {
        addMessage,
        createMessage,
        getMessages,
        removeMessage,
        wipeMessages,
        endSession
    }
)(MessagesContainer);