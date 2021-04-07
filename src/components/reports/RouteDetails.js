import React from 'react'

export default function RouteDetails({ stops }) {
    const renderStops = stops.map((stop) => {
        return(
        <td key={stop.id} className="stop">
            {stop.patient_name} | {stop.patient_address}
        </td>)
    })
    return (
        <tr className="stops-container">
            {renderStops}
        </tr>
    )
}
