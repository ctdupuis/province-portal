import React, { Component } from 'react';

export default class DestinationInput extends Component {
    render() {
        if (this.props.values) {
            const { street, city, state, zipCode } = this.props.values            
        }
        return (
            <div>
                <label htmlFor="street">Street</label>
                <input 
                  type='text'
                  name="street" 
                  onChange={this.props.handleChange}
                //   value={street}
                />
                <label htmlFor="city">City</label>
                <input 
                  type='text'
                  name="city" 
                  onChange={this.props.handleChange}
                //   value={city}
                />
                <label htmlFor="state">State</label>
                <input 
                  type='text'
                  name="state" 
                  onChange={this.props.handleChange}
                //   value={state}
                />
                <label htmlFor="zipCode">Zip Code</label>
                <input 
                  type='text'
                  name="zipCode" 
                  onChange={this.props.handleChange}
                //   value={zipCode}
                />
            </div>
        )
    }
}
