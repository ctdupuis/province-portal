import React, { Component } from 'react';

export default class EmployeeSchedule extends Component {

    renderSchedule(schedule) {
        if (schedule) {
            return schedule.map(sched => {
                const shifts = sched.shifts.map(shift => <td key={shift.id}>{shift.time}</td>)
                return(
                    <tr key={sched.id}>
                        <td>{sched.user.first_name}</td>
                        {shifts}
                    </tr>
                )
            })
        }
    }

    renderEdit(schedule) {
        if (schedule) {
            return schedule.map(sched => {
                const shifts = sched.shifts.map(shift => {
                    return(
                        <td key={shift.id}>
                            <input className="shift-input" type="number" name="shift-start" placeholder={shift.time}/>
                        </td>
                    )
                })
                return(
                    <tr key={sched.id}>
                        <td>{sched.user.first_name}</td>
                        {shifts}
                    </tr>
                )
            })
        }
    }

    render() {
        const schedule  = this.props.schedule ? this.props.schedule[0] : null
        const dates = schedule ? schedule.shifts.map(shift => shift.date) : null
        return (
            <>
                <table className="contact-list">
                    <thead>
                        <tr>
                            <th className="name">Name</th>
                            <th>Mon {dates ? dates[0] : null}</th>
                            <th>Tues {dates ? dates[1] : null}</th>
                            <th>Wed {dates ? dates[2] : null}</th>
                            <th>Thurs {dates ? dates[3] : null}</th>
                            <th>Fri {dates ? dates[4] : null}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.scheduleValue ? this.renderEdit(this.props.schedule) : this.renderSchedule(this.props.schedule)}
                    </tbody>
                </table>
                {this.props.scheduleValue ? 
                <>
                    <button>Save Changes</button>
                    <button onClick={this.props.toggleScheduleEdit}>Cancel</button>
                </> 
                : 
                <button onClick={this.props.toggleScheduleEdit}>Edit Schedule</button>
                }
            </>
        )
    }
}
