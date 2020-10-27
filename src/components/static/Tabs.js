import React from 'react';
import '../../stylesheets/tabs.css';
import { Link } from 'react-router-dom';

const Tabs = ({ endSession }) => {
    return(
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
                    <div className="nav-tab">
                        <Link to={{
                            pathname: '/',
                            state: { redirect: true }
                        }} >Log Out</Link>
                    </div>
            </div>
    )
}

export default Tabs;