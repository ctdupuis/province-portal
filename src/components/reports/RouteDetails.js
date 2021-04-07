import React from 'react';

export default function RouteDetails({ stops }) {
    const renderStops = stops.map((stop) => {
        return(
        <li key={stop.id} className="stop">
            {stop.patient_name} | {stop.patient_address}
        </li>)
    })
    return (
        <ul className="stops-container">
            {renderStops}
        </ul>
    )
}
