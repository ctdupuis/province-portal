import React from 'react';

export default function ContactList({ contacts }) {

    
    const renderContacts = contacts => {
        if (contacts) {
            return contacts.map(contact => {
                console.log(contact)
                return(
                    <div className="contact">
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
