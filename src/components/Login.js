import React, { Component } from 'react'


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

    render() {
        return (
            <div className="session-form-container">
                <div className="form-box">
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <label>Username</label>
                        <input onChange={this.handleChange} type='text' name='username' />
                        <br />
                        <label>Password</label>
                        <input onChange={this.handleChange} type='password' name='password' />
                        <br />

                        <input className="form-btn" type="submit" value="Log In" />
                    </form>
                </div>
            </div>
        )
    }
}
