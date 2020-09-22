import React, { Component } from 'react'

export default class InfoUpdate extends Component {
    state = {
        username: this.props.currentUser.username,
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

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>{this.state.username}</h3>
                    <h4>please update your password</h4>
                    Password:<input onChange={this.handleChange} type='password' name='password' />
                    Password Confirmation:<input onChange={this.handleChange} type='password' name='password_confirm' />

                    <input type="submit" value="Update Info" />
                </form>
            </div>
        )
    }
}