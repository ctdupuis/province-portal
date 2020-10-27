import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../../stylesheets/delivery.css';
require('dotenv').config();

class DeliveryMap extends Component {
    render() {
        return (
        <div className="map-container">
            <Map 
                google={this.props.google}
                initialCenter={{ lat: 30.146626, lng: -92.035548}}
                className={"map"}
                zoom={15}
                style={{ height: '75%', width: "50%", position: 'relative'}}
                containerStyle={{ textAlign: "center" }}
            >
                <Marker 
                    position={{ lat: 30.146626, lng: -92.035548 }}
                    name="Province"
                    title={"This is where you are"}    
                />
            </Map>
        </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(DeliveryMap);