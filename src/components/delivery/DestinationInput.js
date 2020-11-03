import React, { Component } from 'react'

export default class DestinationInput extends Component {
    render() {
        const { street, city, state, zipCode } = this.props.values
        return (
            <div>
                <input 
                  type='text'
                  name="street" 
                  onChange={this.props.handleChange}
                  value={street}
                />
                <input 
                  type='text'
                  name="city" 
                  onChange={this.props.handleChange}
                  value={city}
                />
                <input 
                  type='text'
                  name="state" 
                  onChange={this.props.handleChange}
                  value={state}
                />
                <input 
                  type='text'
                  name="zipCode" 
                  onChange={this.props.handleChange}
                  value={zipCode}
                />
            </div>
        )
    }
}
