import React from 'react';

const Alert = ({ alert }) => {

    return(
        <div className={`alert ${alert.type}`}>
        <header>
            <span className={`x ${alert.type}`}>X</span>
        </header>
            <p>{alert.text}</p>
        </div>
    )
}

export default Alert;