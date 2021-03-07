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

    const handleDelete = userID => {
        if (window.confirm("Are you sure? This action cannot be undone.")) {
            props.removeUser(userID)
        }
    }

    return (
        <>
            <div className="user-info-title">
                <h3>Deactivate Employee Account</h3>
            </div>
            <label className="select-label" htmlFor="rm-employee">Select an employee</label>
            <select id="rm-employee">
                {props.contacts ? employeeSelects(props.contacts) : <Loading />}
            </select>
            <button className="deactivate" onClick={(event) => {handleDelete(parseInt(event.target.previousElementSibling.value))}}>Deactivate</button>
        </>
    )
}
