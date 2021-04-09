import React, { Component } from 'react';

export default class AddStopFields extends Component {
    state = {
        patient_name: "",
        patient_address: "",
        miles: "",
        routeID: this.props.routeID
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = event => {
        event.preventDefault();
        console.log(this.state)
        
    }

    render() {
        const disabled = this.state.patient_name === "" || this.state.patient_address === "" || this.state.miles === ""
        return (
            <tr>
                <td>
                    <label>Patient Name</label>
                    <input 
                        type="text" 
                        onChange={this.onChange}
                        name="patient_name"
                        className="smaller-fields"
                        value={this.state.patient_name}
                    />
                </td>

                <td>
                    <label>Patient Address</label>
                    <input 
                        type="text"
                        onChange={this.onChange}
                        name="patient_address"
                        className="smaller-fields"
                        value={this.state.patient_address}
                    />
                </td>

                <td>
                    <label>Adjusted Mileage</label>
                    <input 
                        type="number"
                        step=".1"
                        max="50"
                        min="0"
                        name="miles"
                        onChange={this.onChange}
                        className="smaller-fields"
                        value={this.state.miles}
                        style={{ textAlign: "center" }}
                    />
                </td>

                <td>
                    <button className="green-btn" disabled={disabled} onClick={this.handleClick}>Submit</button>
                </td>
            </tr>
        )
    }
}
