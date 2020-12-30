import React, { Component } from 'react';
import "../../stylesheets/sessions/patient-services.css";
import Message from './Message';

export default class PatientServices extends Component {
    render() {
        return (
            <section className="dash-container">
                <div className="dash-content">
                    <div className="user-info-title">
                        Message Thread
                    </div>
                    <div className="messages-area">
                        <Message />
                        <Message />
                    </div>
                </div>
            </section>
        )
    }
}
