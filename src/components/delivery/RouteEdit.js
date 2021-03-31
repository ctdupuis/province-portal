import React, { Component } from 'react';
import moment from 'moment';
import { getReport } from '../../actions/log-entries';

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

    setType = async(value) => {
        this.setState({
            ...this.state,
            type: value
        })
        return this.state
    }

    handleClick = event => {
        this.setType(event.target.value)
        .then((state) => getReport(this.state))
        .then((report) => this.setState({
            ...this.state,
            report: report
        }))
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
                    <button 
                        className="green-btn" 
                        disabled={disabled}
                        onClick={this.handleClick}
                        value={"add"}
                    >
                        Add A Stop
                    </button>

                    <button 
                        className="green-btn" 
                        disabled={disabled}
                        onClick={this.handleClick}
                        value={"edit"}
                    >
                        Edit A Stop
                    </button>

                    <button 
                        className="green-btn" 
                        disabled={disabled}
                        onClick={this.handleClick}
                        value={"remove"}
                    >
                        Remove A Stop
                    </button>
                </div>
            </div>
        )
    }
}