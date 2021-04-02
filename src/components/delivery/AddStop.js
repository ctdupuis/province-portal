import React from 'react';

export default function AddStop({ entries }) {
    const renderEntries = entries.map((e) => {
        return(
            <tr key={e.id}>
                <td>{e.date_format}</td>
                <td>{e.user.first_name} | {e.user.username}</td>
                <td>{e.stops.length}</td>
                <td>{e.miles}</td>
            </tr>
        )
    })
    const table = <table id="report-layout">
        <thead>
            <tr>
                <th>Date</th>
                <th>User</th>
                <th># of Stops</th>
                <th>Total Miles</th>
            </tr>
        </thead>
        <tbody>
            {renderEntries}
        </tbody>
    </table>

    return (
        <div>
            <h3>Choose a Route</h3>
            {table}
        </div>
        // <div>Add Stop</div>
    )
}
