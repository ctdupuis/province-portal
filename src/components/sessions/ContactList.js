import React from 'react';

export default function ContactList({ contacts }) {

    
    const renderContacts = contacts => {
        if (contacts) {
            return contacts.map(contact => {
                return(
                    <div className="contact" key={contact.id}>
                        {contact.username} | {contact.first_name} {contact.last_name}
                    </div>
                )
            })
        }  
    }
    return (
        <div>
            {renderContacts(contacts)}
        </div>
    )
}
