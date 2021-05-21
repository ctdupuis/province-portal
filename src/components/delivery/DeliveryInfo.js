import React from 'react';
import AptComplexes from './AptComplexes';
import SatDelivery from './SatDelivery';
import '../../stylesheets/delivery/deliveryinfo.css';

export default function DeliveryInfo() {
    return (

            <div className="flex-container">
                <AptComplexes />
                <SatDelivery />
            </div>

    )
}
