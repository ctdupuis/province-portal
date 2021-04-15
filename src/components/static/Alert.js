import React from 'react';

const Alert = ({ alert }) => {

    return(
        <div className={`alert ${alert.type}`}>
            <p>{alert.text}</p>
            <span className="x">X</span>
        </div>
    )
}

export default Alert;