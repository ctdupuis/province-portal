import React, { Component } from 'react';
import "../../stylesheets/sessions/patient-services.css";
import Loading from '../static/Loading';
import Message from './Message';

export default class PatientServices extends Component {
    state = {
        body: "",
        currentUser: this.props.currentUser
    }

    componentDidMount(){
        this.props.getConversation();
    }

    displayMessages = (conversation) => {
        if (conversation) {
            const sortedMessages = conversation.messages.sort(
                (a, b) => new Date(b.created_at) - new Date(a.created_at)
            );
            return sortedMessages.map(message => <Message key={message.id} message={message} />)
        }
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
        const { loading, conversation } = this.props
        return loading ? <Loading /> :
        (
            <section className="dash-container">
                <div className="dash-content">
                    <div className="user-info-title">
                        <h3>What's going on?</h3>
                        <div className="comment_handler">
                            <div className="comment_field">
                            <input
                                className="comment-input"
                                name="body"
                                type="text"
                                onChange={this.handleChange}
                            />
                            </div>
                            <div className="comment_submit_btn">
                            <form style={{height: "100%"}} onSubmit={this.handleSubmit}>
                            <input 
                                className="comment-submit" 
                                type="submit" 
                                value="Post" 
                            />
                            </form>
                            </div>
                        </div>
                    </div>
                    <div className="messages-area">
                        {this.displayMessages(conversation)}
                    </div>
                </div>
            </section>
        )
    }
}
