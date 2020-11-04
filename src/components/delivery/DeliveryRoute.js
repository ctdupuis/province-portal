import React, { Component } from 'react';
import DestinationInput from './DestinationInput';
import DestinationList from './DestinationList';

export default class DeliveryRoute extends Component {
    state = {
        destinations: [],
        destinationAmt: undefined,
        buttonClicked: false,
        displayList: "none",
        origins: { lat: 30.146626, lng: -92.035548} 
    }

    saveDestinationAmt = event => {
        // debugger
        this.setState({ 
            destinationAmt: event.target.previousElementSibling.value,
            buttonClicked: !this.state.buttonClicked
        })
    }

    renderInputs = event => {
        let target = parseInt(event.target.previousElementSibling.value)
        debugger
        this.renderFields(target);
    }

    renderFields = number => {
        debugger
        if (number) {
            for (let i = 0; i < number; i++) {
                return(<DestinationInput key={i} />)
            }
        }
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
                <button onClick={this.renderInputs}>This Many</button>
                <ul className="destination-list">
                    {this.renderInputs}
                </ul>
                {/* <button onClick={this.saveDestination}>Save Destination</button>
                <input type="submit" value="Calculate Mileage" /> */}

            </div>
        )
    }
}
