import React, { useState } from 'react';
import RouteDetails from './RouteDetails';

export default function MilesReport({ entries }) {
    const [detailDisplay, setDisplay] = useState(false)
    const [detailID, setDetailID] = useState(undefined)

    const renderEntries = entries.map((e) => {
        return(
            <tr className="selectable" key={e.id} onClick={() => {
                setDisplay(!detailDisplay)
                setDetailID(e.id)
            }}>
                <td>{e.date_format}</td>
                <td>{e.user.first_name} | {e.user.username}</td>
                <td>{e.stops.length}</td>
                <td>{e.miles}</td>
                <td>
                    {
                        detailDisplay && detailID === e.id ? 
                            <RouteDetails stops={e.stops} />
                            :
                            null
                    }
                </td>
            </tr>
        )
    })

    const mileageValues = entries.map((e) => e.miles) 

    const totalMileage = mileageValues.reduce((a, b) => a + b, 0).toFixed(1)

    const table = <table id="report-layout">
        <thead>
            <th>Date</th>
            <th>User</th>
            <th># of Stops</th>
            <th>Total Miles</th>
            {detailDisplay ?
                <th>Patient Name | Patient Address</th>
                :
                <th></th>
            }
        </thead>
        <tbody>
            {renderEntries}
        </tbody>
        <tfoot>
            <th>Total Miles For Date Range</th>
            <th></th>
            <th></th>
            <th>{totalMileage}</th>
        </tfoot>
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
