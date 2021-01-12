import React, { Component } from 'react';

export default class DeliveryEntry extends Component {
    state = {
        locations: [{address: ""}]
    }

    entryFields = () => {
        for (let i = 0; i < this.state.fields; i++) {
            return <input type="text" placeholder={`Enter address ${i+1}`} />
        }
    }

    incrementFields = () => {
        this.setState((prevState) => ({ fields: prevState.fields + 1 }))
    }

    async setFields(event) {
        const fieldsAmt = parseInt(event.target.previousElementSibling.value)
        this.setState({
            fields: fieldsAmt
        })
    }

    handleSubmit = event => { event.preventDefault(); }

    handleChange = event => {
        if(["address"].includes(event.target.className) ) {
            let locations = [...this.state.locations]
            locations[event.target.dataset.id][event.target.className] = event.target.value
            this.setState({ locations })
        }
    }

    addLocation = () => {
        this.setState((prevState) => ({
            locations: [...prevState.locations, {address: ""}]
        }))
    }

    finalizeRoute = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div className="dash-content">
                <div className="user-info-title">
                    <h3>Mileage Entry</h3>
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
                    <button className="green-btn" onClick={this.addLocation}>
                        Add Another Field
                    </button>
                    <button className="green-btn" onClick={this.finalizeRoute}>
                        Finalize Route
                    </button>
                </form>
            </div>
        )
    }
}
