import React, { Component } from 'react';
import '../../stylesheets/reports.css'
import CheckLog from './CheckLog';

export default class ReportManager extends Component {
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
                            <option value="FedEx">FedEx Issues Report</option>
                        </select>
                        <br />
                        <label htmlFor="start-date">Start Date</label>
                        <input type="date" id="start-date" />
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" id="end-date" />
                    </div>
                    <button className="green-btn">Generate Report</button>
                </div>
            </section>
        )
    }
}
