import React from 'react';

export default function NewMessage({ handleChange, handleSubmit, body, disabled, wipeMessages, currentUser }) {

    const handleMessageWipe = (event, currentUser, wipeMessages) => {
        event.preventDefault();
        let name = `${currentUser.first_name} ${currentUser.last_name}`
        if (window.prompt("This is a very destructive action. Please type your full name to confirm") === name ) {
            wipeMessages();
        }
    }

    return (
        <form style={{height: "100%"}} onSubmit={handleSubmit}>
            <div className="comment_handler">
                <div className="comment_field">
                    <input
                        className="comment-input"
                        name="body"
                        type="text"
                        onChange={handleChange}
                        value={body}
                    />
                </div>
                <div className="comment_submit_btn">
                    <input 
                        className="comment-submit" 
                        type="submit" 
                        value="Send" 
                        disabled={disabled}
                    />
                </div>
                    { currentUser.admin ? <button onClick={(event) => handleMessageWipe(event, currentUser, wipeMessages)} className="comment-submit rounded">Clear</button> : null }              
            </div>
        </form>
    )
}
