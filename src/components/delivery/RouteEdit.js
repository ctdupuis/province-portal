import React, { Component } from 'react';
import moment from 'moment';

export default class RouteEdit extends Component {
    state = {
        start_date: "",
        end_date: "",
        type: undefined,
        report: undefined
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    checkDisable = () => {
        if (this.state.start_date !== "" && this.state.end_date !== "") {
            return true
        } else {
            return false
        }

    }

    render() {
        const disabled = this.checkDisable() ? false : true 
        return (
            <div className="dash-content">
                <div className="user-info-title">
                    <h3>Route Amendment</h3>
                </div>
                <div className="user-info-content">
                    <div className="form-group">
                        <label htmlFor="start-date">Start Date</label>
                        <input 
                            type="date" 
                            name="start_date" 
                            id="start-date" 
                            value={this.state.start_date}
                            onChange={this.onChange}
                            max={moment().format("YYYY-MM-DD")}
                        />

                        <label htmlFor="end-date">End Date</label>
                        <input 
                            type="date" 
                            name="end_date" 
                            id="end-date" 
                            value={this.state.end_date}
                            onChange={this.onChange}
                            max={moment().format("YYYY-MM-DD")}
                        />
                    </div>
                    <button className="green-btn" disabled={disabled}>Add A Stop</button>
                    <button className="green-btn" disabled={disabled}>Edit A Stop</button>
                    <button className="green-btn" disabled={disabled}>Remove A Stop</button>
                </div>
            </div>
        )
    }
}
