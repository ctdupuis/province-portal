import React, { Component } from 'react'

export default class InfoUpdate extends Component {
    state = {
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
        this.props.updateInfo(this.state)
        this.setState({
            password: '',
            password_confirm: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Password:<input onChange={this.handleChange} type='password' name='password' />
                    Password Confirmation:<input onChange={this.handleChange} type='password' name='password_confirm' />

                    <input type="submit" value="Update Info" />
                </form>
            </div>
        )
    }
}