import React from 'react';
import '../../stylesheets/tabs.css';
import { Link } from 'react-router-dom';

const Tabs = ({ endSession }) => {
    return(
        <div className="nav-tabs-container">
                    <div className="nav-tab">
                        <div className="link-container">
                            <Link to={'/dashboard'}>Dashboard</Link>
                        </div>
                    </div>
                    <div className="nav-tab">
                        <div className="link-container">
                            <Link to={'/announcements'}>Announcements</Link>
                        </div>
                    </div>
                    <div className="nav-tab">
                        <div className="link-container">
                            <Link to={'/delivery-map'}>Delivery Map</Link>
                        </div>
                    </div>
                    <div className="nav-tab">
                        <div className="link-container">
                            <Link to={'/pickups'}>Pickups</Link>
                        </div>
                    </div>
                    <div className="nav-tab">
                        <div className="link-container">
                            <Link to={'/inventory'}>Inventory</Link>
                        </div>
                    </div>
                    <div className="nav-tab">
                        <div className="link-container">
                            <Link to={'/fedex-issues'}>FedEx Issues</Link>
                        </div>
                    </div>
                    <div className="nav-tab">
                        <div className="link-container">
                            <Link to={'/mileage-tracker'}>Mileage Tracker</Link>
                        </div>
                    </div>
                    <div className="nav-tab">
                        <div className="link-container">
                            <Link to={'/dashboard'} onClick={() => endSession()}>Log Out</Link>
                        </div>
                    </div>
            </div>
    )
}

export default Tabs;