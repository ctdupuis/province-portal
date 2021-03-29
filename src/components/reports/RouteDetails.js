import React from 'react'

export default function RouteDetails({ stops }) {
    const renderStops = stops.map((stop) => {
        return(
        <div key={stop.id} className="stop">
            {stop.patient_name}, {stop.patient_address}
        </div>)
    })
    return (
        <div>
            {renderStops}
        </div>
    )
}
