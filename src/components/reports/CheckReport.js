import React from 'react';

export default function CheckReport({ entries }) {
    const renderEntries = entries.map((e) => {
        return(
            <tr key={e.id}>
                <td>{e.patient_name}</td>
                <td>{e.rx_num}</td>
                <td>{e.original_amt}</td>
                <td>{e.adjusted_amt}</td>
                <td>{e.price_difference}</td>
            </tr>
        )
    })
    const table = <table id="check">
        <thead>
            <tr>
                <th>Patient Name</th>
                <th>RX #</th>
                <th>Original Amount</th>
                <th>Adjusted Amount</th>
                <th>Price Differential</th>
            </tr>
        </thead>
        <tbody>
            {renderEntries}
        </tbody>
    </table>
    return (
        <div className="dash-content">
            <div className="user-info-title">
                <h3>Check Report</h3>
            </div>

            {entries ? table : null}
        </div>
    )
}

// adjusted_amt: 15
// check_log_id: 2
// created: "2021-03-01"
// id: 3
// original_amt: 210
// patient_name: "Jersey Mike"
// price_difference: 195
// rx_num: "762773"