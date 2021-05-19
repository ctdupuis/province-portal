import React, { Component } from 'react';
import { connect } from "react-redux";
import Alert from '../components/static/Alert';
import '../stylesheets/alerts.css';

class AlertHandler extends Component {

    renderAlert = alerts => {
        return alerts.map(alert => <Alert alert={alert} />)
    }

    render() {
        const {alerts} = this.props
        return (
            <div className="alert-wrapper">
                {this.renderAlert(alerts)}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        alerts: state.alertsReducer.alerts
    }), null
)(AlertHandler);  