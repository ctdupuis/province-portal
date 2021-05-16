import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Message({ message, currentUser, removeMessage }) {
    const handleDelete = messageID => {
        if (window.confirm("Are you sure?\nThis action cannot be undone")) {
            removeMessage(messageID)
        }
    }

    const checkOwnership = (currentUser, userID) => {
        if (currentUser.id === userID) {return true} else {return false}
    }

    const { id, text, author, created, user_id } = message

    const rowType = checkOwnership(currentUser, message.user_id) ? "right" : "left"
    const mesType = checkOwnership(currentUser, message.user_id) ? "sender" : "receiver"

    return (
        <div className={`message-row ${rowType}`}>
            <div className={`message ${mesType}`}>
                <div className="message-body">
                    {text}
                </div>
                <div className="message-metadata">
                    <div className="message-author">
                        {author}
                    </div>
                    <div className="message-timestamps">
                        <em>
                            {created}
                        </em>
                    </div>
                {checkOwnership(currentUser, user_id) ? 
                    <div className="edit-delete-container">
                        <button className="delete-info message-timestamps" onClick={() => handleDelete(id)}>
                            <FaTrash />
                        </button>    
                    </div> 
                :
                null}
                </div>
            </div>
        </div>
    )
}
