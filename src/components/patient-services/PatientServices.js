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
        console.warn("This is the state after the submission", this.state)
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    onReceived = response => {
        const message = JSON.parse(response);
        console.log("Response from onReceived()", message)
        this.props.addMessage(message);
    }

    render() {
        const { loading, messages } = this.props
        return(
            <section className="dash-container">
                <div className="dash-content">
                    <div className="user-info-title">
                        <h3>What's going on?</h3>
                        <ActionCableConsumer
                            channel={{ channel: "MessagesChannel", demo: this.props.currentUser.demo }}
                            onReceived={this.onReceived}
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
