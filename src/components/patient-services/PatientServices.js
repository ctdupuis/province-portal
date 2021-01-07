import React, { Component } from 'react';
import "../../stylesheets/sessions/patient-services.css";
import Loading from '../static/Loading';
import Message from './Message';
import { ActionCableConsumer } from 'react-actioncable-provider';
import NewMessage from './NewMessage';

export default class PatientServices extends Component {
    state = {
        body: "",
        currentUser: this.props.currentUser
    }

    componentDidMount(){
        this.props.getConversation();
    }

    displayMessages = (messages) => {
        const sortedMessages = messages.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        return sortedMessages.map(message => <Message key={message.id} message={message} />)
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.createMessage(this.state);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {
        const { loading, messages } = this.props
        return loading ? <Loading /> :
        (
            <section className="dash-container">
                <div className="dash-content">
                    <div className="user-info-title">
                        <h3>What's going on?</h3>
                        <ActionCableConsumer
                            channel={{ channel: "ConversationsChannel" }}
                        />
                        <NewMessage 
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                    </div>
                    <div className="messages-area">
                        {this.displayMessages(messages)}
                    </div>
                </div>
            </section>
        )
    }
}
