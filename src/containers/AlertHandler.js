import React, { Component } from 'react';
import { connect } from "react-redux";
import Alert from '../components/static/Alert';

class AlertHandler extends Component {

    renderAlert = props => {
        return <Alert alert={this.props.alert} />
    }

    render() {
        return (
            <div className="alert-wrapper">
                {this.renderAlert(this.props)}
            </div>
        )
    }
}

export default connect(
    (state) => ({
        alerts: state.alertsReducer.alerts
    }), null
)(AlertHandler);