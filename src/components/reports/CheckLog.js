import React, { Component } from 'react';

export default class CheckLog extends Component {
    state = {
        patient_name: "",
        rx_num: "",
        original_amt: "",
        adjusted_amt: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = event => {
        event.preventDefault();
        if (window.confirm("Double check before submitting!")) {
            this.props.createCheckEntry(this.state)
            this.setState({
                patient_name: "",
                rx_num: "",
                original_amt: "",
                adjusted_amt: ""
            });
        }
    }

    render() {

        return (
            <div className="dash-content" onSubmit={this.handleSubmit}>
                <div className="user-info-title">
                    <h3>Check Log</h3>
                </div>
                <div className="user-info-content">
                    <form id="report-form">
                        <label htmlFor="patient_name">Patient Name</label>
                        <input
                            type="text"
                            name="patient_name"
                            className="report-text"
                            value={this.state.patient_name}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="rxNumber">RX #</label>
                        <input
                            type="text"
                            name="rx_num"
                            className="report-text"
                            value={this.state.rx_num}
                            maxLength="6"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="original_amt">Original Amount</label>
                        <input 
                            type="number"
                            min="0"
                            step="0.01"
                            name="original_amt"
                            className="report-num"
                            value={this.state.original_amt}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="adjusted_amt">Adjusted Amount</label>
                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            name="adjusted_amt"
                            className="report-num"
                            value={this.state.adjusted_amt}
                            onChange={this.handleChange}
                        />
    
                        <button 
                            className="green-btn"
                            type="submit"
                        >Save Entry</button>
                    </form>
                </div>
            </div>
        )
    }
}