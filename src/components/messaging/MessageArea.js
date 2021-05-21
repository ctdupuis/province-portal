import React, { Component } from 'react';
import "../../stylesheets/sessions/patient-services.css";
import Message from './Message';
import { ActionCableConsumer } from 'react-actioncable-provider';
import NewMessage from './NewMessage';
import { API_WS_ROOT } from '../../constants';
import { getConvo } from '../../actions/messages';

const actioncable = require("actioncable")

export default class PatientServices extends Component {
    state = {
        body: "",
        currentUser: this.props.currentUser
    }
    
    componentDidMount(){
        this.props.getMessages();
        this.cable = actioncable.createConsumer(API_WS_ROOT)
        getConvo().then(
            (convo) => {
                this.convoChannel = this.cable.subscriptions.create({
                    channel: "MessagesChannel",
                    id: convo.id,
                    demo: this.props.currentUser.demo
                }, 
                {
                    connected: () => {
                        console.log("connected")
                    },
                    disconnected: () => {
                        console.warn("disconnected")
                    },
                    received: data => this.onReceived(data),
    
                })
            }
        )
    }

    displayMessages = (messages) => {
        const sortedMessages = messages.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        return sortedMessages.map(message => 
            <Message 
                key={message.id} 
                currentUser={this.props.currentUser} 
                message={message} 
                removeMessage={this.props.removeMessage}
            />
        )
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.props.createMessage(this.state);
        this.setState({
            ...this.state,
            body: ""
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onReceived = async(response) => {
        const message = JSON.parse(response);
        const found = await this.props.messages.find(mes => mes.id === message.id)
        if (!found) {
            console.log("Message was not found so I added it")
            this.props.addMessage(message);
        } else {
            console.log("We found it. No need to make another one")
            return null
        }
    }

    render() {
        const { messages } = this.props
        const disabled = this.state.body === "" ? true : false
        return(
            <section className="dash-container">
                <div className="dash-content">
                    <div className="user-info-title solid-bg">
                        {/* <ActionCableConsumer
                            channel={{ channel: "MessagesChannel", demo: this.props.currentUser.demo }}
                            onReceived={this.onReceived}
                        /> */}
                        <NewMessage 
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            body={this.state.body}
                            disabled={disabled}
                            currentUser={this.props.currentUser}
                            wipeMessages={this.props.wipeMessages}
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
