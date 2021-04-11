import React, { Component } from 'react';
import moment from 'moment';
import { getReport } from '../../actions/log-entries';
import AddStop from './AddStop';
import EditStop from './EditStop';
import RemoveStop from './RemoveStop';

export default class RouteEdit extends Component {
    state = {
        start_date: "",
        // end_date: "",
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
        if (this.state.start_date !== "") {
            return true
        } else {
            return false
        }

    }

    renderRouteAmend = report => {
        if (report) {
            switch (this.state.type) {
                case 'add':
                    return <AddStop entries={report} addStop={this.props.addStop} />
                case 'edit':
                    return <EditStop entries={report} editStop={this.props.editStop} />
                case 'remove':
                    return <RemoveStop entries={report} removeStop={this.props.removeStop} />
                default: return null;
            }
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
                        <label htmlFor="start-date">Route Date</label>
                        <input 
                            type="date" 
                            name="start_date" 
                            id="start-date" 
                            value={this.state.start_date}
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

                    {this.renderRouteAmend(this.state.report)}
                </div>
            </div>
        )
    }
}
