import React, { Component } from 'react';
import '../../stylesheets/sessions/forms.css';

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

    handleClick = event => {
        event.preventDefault();
        if (event.target.value === "Demo") {
            const demo = {username: 'demo', password: 'demo'}
            this.props.login(demo, this.props.history)
        } else {
            this.props.login(this.state, this.props.history)
        }
    }

    render() {
        return (
            <div className="session-form-container">
                <div className="form-box">
                    <form className="session-form">

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

                        <input className="form-btn" type="submit"  onClick={this.handleClick} value="Log In" />
                        <input className="form-btn" type="submit"  onClick={this.handleClick} value="Demo" />
                    </form>
                </div>
            </div>
        )
    }
}
