import React, { Component } from 'react'

export default class DeliveryEntry extends Component {
    render() {
        return (
            <div className="dash-content">
                <div className="user-info-title">
                    <h3>Mileage Entry</h3>
                </div>
                <form className="new-user-form">
                    <input
                    type="text"
                    name="address"
                    placeholder="Enter address..."
                    onChange={this.handleChange}
                    />
                    <input
                    className="new-user-sbmt"
                    type="submit"
                    value="Check Location"
                    />
                </form>
            </div>
        )
    }
}
