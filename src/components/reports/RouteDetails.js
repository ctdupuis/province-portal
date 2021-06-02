import React from 'react';

export default function RouteDetails({ stops }) {
    const renderStops = stops.map((stop) => {
        return(
        <li key={stop.id} className="stop">
            <strong style={{color: "var(--d-green)"}}>{stop.patient_name}</strong> {stop.patient_address}
        </li>)
    })
    return (
        <tr className="stops-container">
            {renderStops}
        </tr>
    )
}
