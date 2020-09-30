import React, { Component } from 'react';
import Alert from './Alert';


export default class Login extends Component {
    

    state = {
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.login(this.state, this.props.history)
        this.setState({
            username: '',
            password: ''
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

                        <label>Username</label>
                        <input 
                            onChange={this.handleChange} 
                            type='text' 
                            name='username' 
                            value={this.state.username}
                        />
                        <br />

                        <label>Password</label>
                        <input 
                            onChange={this.handleChange} 
                            type='password' 
                            name='password' 
                            value={this.state.password}
                        />
                        <br />

                        <input className="form-btn" type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        )
    }
}
