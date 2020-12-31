import React, { Component } from 'react';
import "../../stylesheets/sessions/patient-services.css";
import Loading from '../static/Loading';
import Message from './Message';

export default class PatientServices extends Component {
    componentDidMount(){
        this.props.getConversation();
    }

    displayMessages = (conversation) => {
        if (conversation) {
            return conversation.messages.map(message => <Message key={message.id} message={message} />)
        }
    }

    render() {
        const { loading, conversation } = this.props
        return loading ? <Loading /> :
        (
            <section className="dash-container">
                <div className="dash-content">
                    <div className="user-info-title">
                        Message Thread
                    </div>
                    <div className="messages-area">
                        {this.displayMessages(conversation)}
                    </div>
                </div>
            </section>
        )
    }
}
