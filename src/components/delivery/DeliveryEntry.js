import React, { Component } from 'react';

export default class DeliveryEntry extends Component {
    state = {
        locations: [{address: ""}],
        mileage: ""
    }

    handleSubmit = event => { 
        event.preventDefault(); 
        this.props.finalizeRoute(this.state)
        // this.setState({
        //     locations: [{ address: "" }],
        //     mileage: ""
        // })
    }

    handleChange = event => {
        // debugger
        if (["address"].includes(event.target.className)) {
            let locations = [...this.state.locations]
            locations[event.target.dataset.id][event.target.className] = event.target.value
            this.setState({ locations })
        } else {
            this.setState({ [event.target.name]: event.target.value })
        }
    }

    addLocation = event => {
        this.setState((prevState) => ({
            locations: [...prevState.locations, { address: "" }]
        }));
    }

    finalizeRoute = () => {
        console.log(this.state)
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
                    {/* <input
                        type="text"
                        name="address"
                        placeholder="Enter address..."
                        onChange={this.handleChange}
                    />                */}
                    {this.state.locations.map((val, idx) => {
                        let locationID = `location-${idx}`
                        return(
                            <fieldset key={idx}>
                                <legend>Address #{idx + 1}</legend>
                                <input
                                    type="text"
                                    name={locationID}
                                    className="address"
                                    id={locationID}
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
                        Add Another Field
                    </button>
                    <br />
                </form>
                    <button className="green-btn" onClick={this.finalizeRoute}>
                        Finalize Route
                    </button>
            </div>
        )
    }
}
