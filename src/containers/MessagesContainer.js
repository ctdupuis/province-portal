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
} from "../actions/messages";
import { endSession } from "../actions/sessions";
import Tabs from '../components/static/Tabs';
import MessageArea from '../components/messaging/MessageArea';

class MessagesContainer extends Component {
    render() {
        return (
            <Route 
                exact
                path={'/messaging'}
                render={(props) => (
                    this.props.currentUser ? 
                    <>
                        <Tabs endSession={this.props.endSession}/>
                        <MessageArea
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