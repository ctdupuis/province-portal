import React, { Component } from 'react';

export default class EmployeeSchedule extends Component {
    state = {
        shifts: [],
        toggleScheduleEdit: false,
        startDate: "",
        endDate: ""
    }

    toggleScheduleEdit = () => {
        this.setState({
          toggleScheduleEdit: !this.state.toggleScheduleEdit
        })
      }

    handleChange = event => {
        debugger
    }

    dateChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

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
                const user = sched.user
                const shifts = sched.shifts.map(shift => {
                    return(
                        <td key={shift.id}>
                            <input 
                                className="shift-input" 
                                type="number"
                                data-date={shift.date}
                                name={sched.id}
                                placeholder={shift.time}
                                onChange={this.handleChange}
                            />
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
                {this.state.toggleScheduleEdit && this.props.currentUser.admin ? 
                <>
                    <label className="label" htmlFor="startDate">Start Date</label>
                    <input className="input" name="startDate" type="date" onChange={this.dateChange} /> 
                    <label className="label" htmlFor="endDate">End Date</label>
                    <input className="input" name="endDate" type="date" onChange={this.dateChange} />
                    <br />
                </>
                :
                null }
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
                        {this.state.toggleScheduleEdit ? this.renderEdit(this.props.schedule) : this.renderSchedule(this.props.schedule)}
                    </tbody>
                </table>
                {this.state.toggleScheduleEdit && this.props.currentUser.admin ? 
                <>
                    <button className="green-btn">Save Changes</button>
                    <button className="red-btn" onClick={this.toggleScheduleEdit}>Cancel</button>
                </> 
                : 
                this.props.currentUser.admin ? 
                <button 
                    className="green-btn" 
                    onClick={this.toggleScheduleEdit}>
                        Edit Schedule
                </button>
                : null }
                
            </>
        )
    }
}
