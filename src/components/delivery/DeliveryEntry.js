import React, { Component } from 'react';

export default class DeliveryEntry extends Component {
    state = {
        locations: [{address: "", patient: ""}],
        mileage: ""
    }

    // handleSubmit = event => { 
    //     event.preventDefault(); 
    //     this.props.finalizeRoute(this.state)
    //     // this.setState({
    //     //     locations: [{ address: "" }],
    //     //     mileage: ""
    //     // })
    // }

    handleChange = event => {
        // debugger
        if (["address", "patient"].includes(event.target.className)) {
            let locations = [...this.state.locations]
            locations[event.target.dataset.id][event.target.className] = event.target.value
            this.setState({ locations })
        } else {
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    addLocation = event => {
        event.preventDefault();
        this.setState((prevState) => ({
            locations: [...prevState.locations, { address: "" }]
        }));
    }

    render() {
        return (
            <div className="dash-content">
                <div className="user-info-title">
                    <h3>Route Planner</h3>
                </div>
                {/* <input type="number" name="fields" />
                <button onClick={(e) => this.setFields(e)}>This Many</button> */}
                <form className="new-user-form" onSubmit={this.handleSubmit}>
                    {this.state.locations.map((val, idx) => {
                        let locationID = `location-${idx}`, patientID = `patient-${idx}`
                        return(
                            <fieldset key={idx}>
                                <legend>Stop #{idx + 1}</legend>
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    name={locationID}
                                    className="address"
                                    id={locationID}
                                    data-id={idx}
                                    onChange={this.handleChange}
                                />
                                <label htmlFor="patient">Patient Name</label>
                                <input
                                    type="text"
                                    name={patientID}
                                    className="patient"
                                    id={patientID}
                                    data-id={idx}
                                    onChange={this.handleChange}
                                />
                            </fieldset>
                        )
                    })}
                    <label htmlFor="mileage">Total Mileage</label>
                    <input 
                        type="number" 
                        name="mileage"
                        onChange={this.handleChange}
                        className="number-input"
                    />
                    <button className="green-btn" onClick={this.addLocation}>
                        Add Another Stop
                    </button>
                    <br />
                </form>
                    <button className="green-btn" onClick={() => this.props.finalizeRoute(this.state)}>
                        Finalize Route
                    </button>
            </div>
        )
    }
}
