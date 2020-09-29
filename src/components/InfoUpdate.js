import React, { Component } from 'react';
import Alert from './Alert';

export default class InfoUpdate extends Component {
    state = {
        // username: this.props.currentUser.username,
        password: '',
        password_confirm: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.updateInfo(this.state, this.props.history)
        this.setState({
            password: '',
            password_confirm: ''
        })
    }

    renderAlert = () => {
        if (this.props.error) {
            return <Alert msg={this.props.error} />
        }
    }

    render() {
        return (
            <div className="session-form-container">
                <div className="form-box">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        {this.renderAlert()}

                        <label>Password</label>
                        <input 
                            onChange={this.handleChange} 
                            type='password' 
                            name='password' 
                            value={this.state.password}
                        />
                        <br />

                        <label>Confirm Password</label>
                        <input 
                            onChange={this.handleChange} 
                            type='password' 
                            name='password_confirm' 
                            value={this.state.password_confirm}
                        />
                        <br />

                        <input className="form-btn" type="submit" value="Update Info" />
                    </form>
                </div>
            </div>
        )
    }
}