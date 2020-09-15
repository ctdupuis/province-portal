import React, { Component } from 'react'

export default class Home extends Component {
    componentDidMount() {
        fetch('http://localhost:5000')
        .then(r => r.json())
        .then(j => console.log(j))
    }
    render() {
        return (
            <div>
                Home Component
            </div>
        )
    }
}
