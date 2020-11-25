import React, { Component } from 'react'

export default class EmployeeSchedule extends Component {

    renderContacts(contacts) {
        if (contacts) {
            return contacts.map(contact => {
                return(<tr key={contact.id}>
                    <td>{contact.first_name}</td>
                    <td>9-5</td>
                    <td>9-5</td>
                    <td>9-5</td>
                    <td>9-5</td>
                    <td>9-5</td>
                </tr>)
            })
        }
    }

    render() {
        return (
            <table className="contact-list">
                <thead>
                    <tr>
                        <th className="name">Name</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderContacts(this.props.contacts)}
                </tbody>
            </table>
        )
    }
}
