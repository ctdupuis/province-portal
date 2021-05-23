import React, { Component } from 'react';

export default class DeliveryEntry extends Component {
    state = {
        locations: [{address: "", patient: ""}],
        mileage: ""
    }

    handleChange = event => {
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
            locations: [...prevState.locations, { address: "", patient: "" }]
        }));
    }

    popLocation = event => {
        event.preventDefault();
        let keepers = this.state.locations.slice(0, this.state.locations.length-1)
        this.setState({
            ...this.state,
            locations: [...keepers]
        })
    }

    render() {
        let locations = this.state.locations
        return (
            <div className="dash-content">
                <div className="user-info-title">
                    <h3>Route Planner</h3>
                </div>
                <form className="new-user-form" onSubmit={this.handleSubmit}>
                    {this.state.locations.map((val, idx) => {
                        let locationID = `location-${idx}`, patientID = `patient-${idx}`
                        return(
                            <fieldset key={idx} className="only-bottom">
                                <legend>Stop #{idx + 1}</legend>

                            <div className="fieldset-flex">


                                <div className="form-group">
                                    <label htmlFor="patient">Patient Name</label>
                                    <input
                                        type="text"
                                        name={patientID}
                                        className="patient"
                                        id={patientID}
                                        data-id={idx}
                                        value={locations[idx].patient}
                                        onChange={this.handleChange}
                                        />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="text"
                                        name={locationID}
                                        className="address"
                                        id={locationID}
                                        data-id={idx}
                                        value={locations[idx].address}
                                        onChange={this.handleChange}
                                        />
                                </div>
                                {/* <button className="green-btn" onClick={() => { debugger }}>
                                    Check Location
                                </button> */}
                            </div>
                            </fieldset>
                        )
                    })}
                    <label htmlFor="mileage">Total Mileage</label>
                    <input 
                        type="number" 
                        min="0"
                        max="100"
                        step="0.1"
                        name="mileage"
                        onChange={this.handleChange}
                        className="number-input"
                    />
                    <button className="green-btn" onClick={this.addLocation}>
                        Add Another Stop
                    </button>
                    <button className="green-btn" onClick={this.popLocation}>
                        Remove Stop
                    </button>
                    <br />
                </form>
                    <button className="green-btn" onClick={() => this.props.finalizeRoute(this.state, this.props.origin)}>
                        Finalize Route
                    </button>
            </div>
        )
    }
}
