import React, { Component } from 'react'


export default class Login extends Component {
    componentDidMount() {
        fetch('http://localhost:5000')
        .then(r => r.json())
        .then(j => console.log(j))
    }

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
        console.log(this.state)
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

                    <input type="submit" />
                </form>
            </div>
        )
    }
}
