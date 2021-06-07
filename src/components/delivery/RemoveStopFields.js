import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

export default function RemoveStopFields({ route, removeStop }) {
    const [miles, setMiles] = useState("")

    const handleDelete = (routeID, stopID) => {
        if (window.confirm("Are you sure?\nThis action cannot be undone")) {
            removeStop(routeID, stopID)
        }
    }

    const renderStops = route.stops.map((stop) => {
        return(
            <div className="stops-container">
                <div className="stop">

                    <div className="form-group">
                        <label>Patient Name</label>
                        <p>{stop.patient_name}</p>
                    </div>

                    <div className="form-group">
                        <label>Patient Address</label>
                        <p>{stop.patient_address}</p>
                    </div>

                    <div className="form-group">
                        <button className="delete-info" onClick={() => handleDelete(route.id, stop.id)}>
                            <FaTrash />
                        </button>
                    </div>
                    
                </div>
            </div>
        )
    })
    return renderStops
}
