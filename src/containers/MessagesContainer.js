import React, { Component } from 'react';
import "../stylesheets/sessions/patient-services.css";
import { Route, Redirect } from 'react-router-dom';
import {
    getConversation,
    createMessage,
    addMessage
} from "../actions/patient-services";
import { endSession } from "../actions/sessions";

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
                            getConversation={this.props.getConversation}
                            messages={this.props.messages}
                            createMessage={this.props.createMessage}
                            addMessage={this.props.addMessage}
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
        getConversation,
        endSession
    }
)(MessagesContainer);