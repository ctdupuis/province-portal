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
        this.props.addStop(this.state);
    }

    render() {
        const disabled = this.state.patient_name === "" || this.state.patient_address === "" || this.state.miles === ""
        return (
            <div className="stops-container">

                <div className="stop">

                    <div className="form-group">
                        <label>Patient Name</label>
                        <input 
                            type="text" 
                            onChange={this.onChange}
                            name="patient_name"
                            className="smaller-fields"
                            value={this.state.patient_name}
                        />
                    </div>

                    <div className="form-group">
                        <label>Patient Address</label>
                        <input 
                            type="text"
                            onChange={this.onChange}
                            name="patient_address"
                            className="smaller-fields"
                            value={this.state.patient_address}
                            />
                    </div>

                    <div className="form-group">
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
                    </div>

                    <div>
                        <button className="green-btn" disabled={disabled} onClick={this.handleClick}>Submit</button>
                    </div>

                </div>
            </div>
        )
    }
}
