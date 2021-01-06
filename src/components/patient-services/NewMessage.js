import React from 'react'

export default function NewMessage({ handleChange, handleSubmit }) {
    return (
        <div className="comment_handler">
            <div className="comment_field">
            <input
                className="comment-input"
                name="body"
                type="text"
                onChange={handleChange}
            />
            </div>
            <div className="comment_submit_btn">
            <form style={{height: "100%"}} onSubmit={handleSubmit}>
            <input 
                className="comment-submit" 
                type="submit" 
                value="Post" 
            />
            </form>
            </div>
        </div>
    )
}
