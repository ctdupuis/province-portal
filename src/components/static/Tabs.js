import React, { Component } from 'react';
import '../../stylesheets/tabs.css';

export default class Tabs extends Component {
    render() {
        return (
            <div className="nav-tabs-container">
                    <div className="nav-tab">Dash</div>
                    <div className="nav-tab">Delivery Map</div>
                    <div className="nav-tab">Pickups</div>
            </div>
        )
    }
}
