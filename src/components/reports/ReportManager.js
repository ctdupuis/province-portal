import React, { Component } from 'react';
import '../../stylesheets/reports.css'

export default class ReportManager extends Component {
    render() {
        return (
            <section className="dash-container">
                <div className="dash-content">
                    <div className="user-info-title">
                        <h3>Check Log</h3>
                    </div>
                    <div className="user-info-content">
                        <form>
                            <label htmlFor="patient_name">Patient Name</label>
                            <input
                                type="text"
                                name="patient_name"
                            />
                            <label htmlFor="rxNumber">RX #</label>
                            <input
                                type="text"
                                name="rxNumber"
                            />
                            <label htmlFor="ogAmount">Original Amount</label>
                            <input 
                                type="number"
                                name="ogAmount"
                                className="num"
                            />
                            <label htmlFor="adjAmount">Adjusted Amount</label>
                            <input
                                type="number"
                                name="adjAmount"
                                className="num"
                            />

                            <button 
                                className="green-btn"
                                type="submit"
                            >Save Entry</button>
                        </form>
                    </div>
                </div>
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
