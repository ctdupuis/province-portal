import React from 'react'
import Loading from '../static/Loading'

export default function DeleteUser(props) {
    // <option value="vw">VW</option>
    const employeeSelects = (employees) => {
        const filtered = employees.filter(u => u.id != props.currentUser.id)
        return filtered.map(e => {
            return <option value={e.id}>{e.first_name}</option>
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
