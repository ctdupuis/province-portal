import React from 'react'
import Loading from '../static/Loading'

export default function DeleteUser(props) {
    const employeeSelects = (employees) => {
        const filtered = employees.filter(u => u.id !== props.currentUser.id)
        const sorted = filtered.sort(function(a, b){ return a + b })
        return sorted.map(e => {
            return <option key={e.id} value={e.id}>{e.first_name}</option>
        })
    }

    return (
        <>
            <div className="user-info-title">
                Deactivate Employee Account
            </div>
            <label className="select-label" htmlFor="rm-employee">Select an employee</label>
            <select id="rm-employee">
                {props.contacts ? employeeSelects(props.contacts) : <Loading />}
            </select>
            <button className="deactivate" onClick={() => console.log("Place deactivate() here!")}>Deactivate</button>
        </>
    )
}
