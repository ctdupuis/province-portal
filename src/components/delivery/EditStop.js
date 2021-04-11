import React, { useState } from 'react';
import EditStopFields from './EditStopFields';

export default function EditStop({ entries, editStop }) {
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

            {
                detailDisplay && detailID === e.id ?
                    <EditStopFields route={e} editStop={editStop} />
                    :
                    null
            }
            </>
        )
    })
    const table = <table id="report-layout">
        <thead>
            <th>Date</th>
            <th>User</th>
            <th># of Stops</th>
            <th>Total Miles</th>
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
