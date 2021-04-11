import React, { useState } from 'react';

export default function EditStop({ entries }) {
    const [detailDisplay, setDisplay] = useState(false)
    const [detailID, setDetailID] = useState(undefined)

    const renderEntries = entries.map((e) => {
        return(
            <>
            <tr className="selectable" key={e.id} onClick={() => {
                setDisplay(!detailDisplay)
                setDetailID(e.id)
            }}>
                <td>{e.date_format}</td>
                <td>{e.user.first_name} | {e.user.username}</td>
                <td>{e.stops.length}</td>
                <td>{e.miles}</td>
            </tr>
            </>
        )
    })
    const table = <table id="report-layout">
        <thead>
            <th>Date</th>
            <th>User</th>
            <th># of Stops</th>
            <th>Total miles</th>
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
    )
}
