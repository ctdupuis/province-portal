import React from 'react';
import AptComplexes from './AptComplexes';
import SatDelivery from './SatDelivery';
import '../../stylesheets/delivery/deliveryinfo.css';

export default function DeliveryInfo() {
    return (
        <div className="dash-content">
            <div className="user-info-title">
                <h3>Helpful Delivery Information</h3>
            </div>
            <div className="flex-container">
                <AptComplexes />
                <SatDelivery />
            </div>

        </div>
    )
}
