import React, { Component } from 'react';

export default class DeliveryEntry extends Component {
    state = {
        fields: 3,
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

    displayFieldset = () => {
        return(
            <fieldset>
                <legend>Entries</legend>
            </fieldset>
        )
    }

    render() {
        return (
            <div className="dash-content">
                <div className="user-info-title">
                    <h3>Mileage Entry</h3>
                </div>
                <input type="number" name="fields" />
                <button onClick={(e) => this.setFields(e)}>This Many</button>
                <form className="new-user-form">
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter address..."
                        onChange={this.handleChange}
                    />               
                        {this.entryFields()}
                    <button onClick={this.incrementFields}>
                        Add Another Field
                    </button>
                </form>
            </div>
        )
    }
}
