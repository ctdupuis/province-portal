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
        type: undefined,
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
           this.setState({
               ...this.state,
               type: undefined
           })
        }
    }

    checkDisable = () => {
        if (this.state.type && this.state.start_date !== "" && this.state.end_date !== "") {
            return true
        } else {
            return false
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
            type: undefined
        });
    }

    renderReport(report) {
        if (report) {
            switch (report.layout) {
                case 'Mileage':
                    return <MilesReport entries={this.state.report} />
                case 'Check':
                    return <CheckReport entries={this.state.report} />
                default: return null;
            }
        }
    }

    render() {
        const disabled = this.checkDisable() ? false : true 
        return (
            <section className="dash-container">
                <div className="flex-container">

                <CheckLog 
                    createCheckEntry={this.props.createCheckEntry}
                />

                    <div className="dash-content">
                        <div className="user-info-title" style={{ height: "3em", padding: "1em"}}>
                            <h3>Generate a Report</h3>
                        </div>

                        <div className="user-info-content">

                            <div className="form-group">

                                <label>Select Report Type</label>
                                <select id="reports" name="reports" onChange={this.setType}>
                                    <option>Select a report...</option>
                                    <option value="Mileage">Mileage Report</option>
                                    <option value="Check">Check Report</option>
                                </select>
                            </div>

                
                            <div className="form-group">

                                <label htmlFor="start_date">Start Date</label>
                                <input 
                                    type="date" 
                                    className="date-input"
                                    name="start_date" 
                                    id="start-date" 
                                    value={this.state.start_date}
                                    onChange={this.onChange}
                                    max={moment().format("YYYY-MM-DD")}
                                />

                            </div>

                            <div className="form-group">

                                <label htmlFor="end_date">End Date</label>
                                <input 
                                    type="date" 
                                    className="date-input"
                                    name="end_date" 
                                    id="end-date" 
                                    value={this.state.end_date}
                                    onChange={this.onChange}
                                    max={moment().format("YYYY-MM-DD")}
                                />

                            </div>
                        </div>

                        <button 
                            className="green-btn"
                            disabled={disabled}
                            onClick={() => this.handleSubmit(this.state)}>
                                Generate Report
                        </button>
                    </div>
                </div>
                {this.renderReport(this.state.report)}
            </section>
        )
    }
}
