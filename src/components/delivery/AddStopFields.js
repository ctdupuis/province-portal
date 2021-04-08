import React, { Component } from 'react';

export default class AddStopFields extends Component {
    state = {
        patient_name: "",
        patient_address: "",
        miles: ""
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <label>Patient Name</label>
                <input 
                    type="text" 
                    onChange={this.onChange}
                    name="patient_name"
                />

                <label>Patient Address</label>
                <input 
                    type="text"
                    onChange={this.onChange}
                    name="patient_address"
                />

                <label>Adjusted Mileage</label>
                <input 
                    type="number"
                    step=".01"
                    max="50"
                    min="0"
                    name="miles"
                    onChange={this.onChange}
                />
            </div>
        )
    }
}
