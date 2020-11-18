import React from 'react';

export default function ContactList({ contacts }) {

    
    const renderContacts = contacts => {
        if (contacts) {
            return contacts.map(contact => {
                return(
                    <tr>
                        <td>{contact.username}</td>
                        <td>{contact.first_name} {contact.last_name}</td>
                        <td>{contact.phone ? contact.phone : "-"}</td>
                        <td>{contact.email ? contact.email : "-"}</td>
                        <td>{contact.admin ? "✅" : "🚫"}</td>
                    </tr>
                )
            })
        }  
    }
    return (
        <table className="contact-list">
            <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Admin</th>
            </tr>
              {renderContacts(contacts)}
        </table>
    )
}
