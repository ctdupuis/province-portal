import React from 'react';
import { FaTrash } from 'react-icons/fa';

export default function Message({ message, currentUser }) {
    const checkOwnership = (currentUser, userID, messageID) => {
        if (currentUser.id === userID) {
          return (
          <div className="edit-delete-container">
            <button className="delete-info message-timestamps">
                <FaTrash />
            </button>    
          </div>
          );
        }
      }
    const { id, text, author, created, user_id } = message
    return (
        <div className="message">
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
            {checkOwnership(currentUser, user_id, id)}
            </div>
        </div>
    )
}
