import React from 'react';

export default function NewMessage({ handleChange, handleSubmit, body, disabled }) {
    return (
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
            <form style={{height: "100%"}} onSubmit={handleSubmit}>
            <input 
                className="comment-submit" 
                type="submit" 
                value="Send Message" 
                disabled={disabled}
            />
            </form>
            </div>
        </div>
    )
}
