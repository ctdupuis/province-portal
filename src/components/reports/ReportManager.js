import React, { Component } from 'react';
import '../../stylesheets/reports.css'
import CheckLog from './CheckLog';

export default class ReportManager extends Component {
    state = {
        start_date: "",
        end_date: "",
        type: ""
    }

    onChange = event => {
        this.setState({ [event.target.name]: [event.target.value] })
    }

    setType = event => {
        this.setState({
            ...this.state,
            type: event.target.value
        })
    }

    render() {
        return (
            <section className="dash-container">
                <CheckLog 
                    createCheckEntry={this.props.createCheckEntry}
                />
                <div className="dash-content">
                    <div className="user-info-title">
                        <h3>Report Viewer</h3>
                    </div>

                    <div className="user-info-content">

                        <select id="reports">
                            <option>Select a report...</option>
                            <option value="Mileage">Mileage Report</option>
                            <option value="Check">Check Report</option>
                        </select>

                        <br />

                        <label htmlFor="start-date">Start Date</label>
                        <input 
                            type="date" 
                            name="start_date" 
                            id="start-date" 
                            value={this.state.start_date}
                        />

                        <label htmlFor="end-date">End Date</label>
                        <input 
                            type="date" 
                            name="end_date" 
                            id="end-date" 
                            value={this.state.end_date}
                        />
                        
                    </div>
                    <button className="green-btn">Generate Report</button>
                </div>
            </section>
        )
    }
}
