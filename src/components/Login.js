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
            <div>
                <form onSubmit={this.handleSubmit}>
                    Username:<input onChange={this.handleChange} type='text' name='username' />
                    Password:<input onChange={this.handleChange} type='password' name='password' />

                    <input type="submit" value="Log In" />
                </form>
            </div>
        )
    }
}
