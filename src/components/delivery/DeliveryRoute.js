import React, { Component } from 'react';
import DestinationInput from './DestinationInput';
import DestinationList from './DestinationList';

export default class DeliveryRoute extends Component {
    state = {
        destinations: [],
        destinationAmt: undefined,
        displayList: "none",
        origins: { lat: 30.146626, lng: -92.035548} 
    }

    saveDestination = event => {
        this.state.destinations.push(event.target.value)
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <label htmlFor="destination-amt">How many stops are in your route?</label>
                <input type="number" name="destinationAmt" onChange={this.handleChange} />
                <button>This Many</button>
                <DestinationList 
                    fields={this.state.destinationAmt}
                />
                {/* <button onClick={this.saveDestination}>Save Destination</button>
                <input type="submit" value="Calculate Mileage" /> */}

            </div>
        )
    }
}
