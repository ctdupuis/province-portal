import React, { Component } from 'react';
import '../../stylesheets/tabs.css';
import { Link } from 'react-router-dom';

export default class Tabs extends Component {
    render() {
        return (
            <div className="nav-tabs-container">
                    <div className="nav-tab">
                        <Link to={'/dashboard'}>Dash</Link>
                    </div>
                    <div className="nav-tab">
                        <Link to={'/delivery-map'}>Delivery Map</Link>
                    </div>
                    <div className="nav-tab">
                        <Link to={'/pickups'}>Pickups</Link>
                    </div>
            </div>
        )
    }
}
