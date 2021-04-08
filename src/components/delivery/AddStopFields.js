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
            <tr>
                <td>
                    <label>Patient Name</label>
                    <input 
                        type="text" 
                        onChange={this.onChange}
                        name="patient_name"
                        className="smaller-fields"
                    />
                </td>

                <td>
                    <label>Patient Address</label>
                    <input 
                        type="text"
                        onChange={this.onChange}
                        name="patient_address"
                        className="smaller-fields"
                    />
                </td>

                <td>
                    <label>Adjusted Mileage</label>
                    <input 
                        type="number"
                        step=".01"
                        max="50"
                        min="0"
                        name="miles"
                        onChange={this.onChange}
                        className="smaller-fields"
                    />
                </td>

                <td>
                    <button className="green-btn">Submit</button>
                </td>
            </tr>
        )
    }
}
