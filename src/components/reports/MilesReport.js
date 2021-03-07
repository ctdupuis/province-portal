import React from 'react';

export default function MilesReport({ entries }) {
    const renderEntries = entries.map((e) => {
        return(
            <tr key={e.id}>
                <td>{e.patient_name}</td>
                <td>{e.patient_address}</td>
                {/* <td>Mileage: {e.miles}</td> */}
                <td>{e.user.first_name} | {e.user.username}</td>
                <td>{e.created}</td>
            </tr>
        )
    })
    const table = <table id="mileage">
        <thead>
            <tr>
                <th>Patient Name</th>
                <th>Patient Address</th>
                <th>User</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {renderEntries}
        </tbody>
    </table>
    
    return (
        <div className="dash-content">
            <div className="user-info-title">
                <h3>Mileage Report</h3>
            </div>

            {entries ? table : null}
        </div>
    )
}
