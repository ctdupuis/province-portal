import React from 'react';

export default function MilesReport({ entries }) {
    const renderEntries = entries.map((e) => {
        return(
            <>
                <div>Patient Name: {e.patient_name}</div>
                <div>Patient Address: {e.patient_address}</div>
                <div>Mileage: {e.miles}</div>
            </>
        )
    })
    return (
        <div className="dash-content">
            <div className="user-info-title">
                <h3>Mileage Report</h3>
            </div>

            {renderEntries}
        </div>
    )
}
