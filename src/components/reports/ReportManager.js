import React, { Component } from 'react';
import '../../stylesheets/logs/reports.css'
import CheckLog from './CheckLog';
import moment from 'moment';
import MilesReport from './MilesReport';
import CheckReport from './CheckReport';

export default class ReportManager extends Component {
    state = {
        start_date: "",
        end_date: "",
        type: "Mileage",
        report: undefined
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    setType = event => {
        if (event.target.value !== "Select a report..." ) {
            this.setState({
                ...this.state,
                type: event.target.value
            })
        } else {
           return null
        }
    }

    handleSubmit = event => {
        this.props.getReport(this.state)
        .then((report) => this.setState({ 
            ...this.state,
            report: report,
            layout: report.layout
            })
        );
        this.setState({
            start_date: "",
            end_date: "",
            type: "Mileage"
        });
    }

    renderReport(report) {
        if (report) {
            switch (report.layout) {
                case 'Mileage':
                    return <MilesReport entries={this.state.report} />
                case 'Check':
                    return <CheckReport entries={this.state.report} />
            }
        }
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

                        <select id="reports" onChange={this.setType}>
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
                    <button className="green-btn" onClick={() => this.handleSubmit(this.state)}>Generate Report</button>
                </div>

                {this.renderReport(this.state.report)}
            </section>
        )
    }
}
