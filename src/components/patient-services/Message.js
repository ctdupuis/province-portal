import React from 'react';

export default function Message({ message }) {
    const {id, text, author, created, updated} = message
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
                    {created}
                </div>
            </div>
        </div>
    )
}
