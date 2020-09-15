import React, { Component } from 'react'

export default class Login extends Component {
    componentDidMount() {
        fetch('http://localhost:5000')
        .then(r => r.json())
        .then(j => console.log(j))
    }

    handleSubmit = event =>{
        event.preventDefault()
        console.log('submit button pressed')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Username:<input type='text' name='username' />
                    Password:<input type='password' name='password' />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}
