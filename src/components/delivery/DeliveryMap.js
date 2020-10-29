import React, { Component } from 'react';
import { 
  Map,
  GoogleApiWrapper,
  Marker,
  withGoogleMap,
  withScriptjs
 } from 'google-maps-react';
import '../../stylesheets/delivery.css';
require('dotenv').config();

class DeliveryMap extends Component {
    render() {
        return (
          <div className="map-wrapper">
            <div className="map-container">
            <form clasName="destination-input">
              <label for="destination">Destination</label>
              <input 
                type='text'
                name="destination" 
              />
            </form>
                <Map 
                    google={this.props.google}
                    initialCenter={{ lat: 30.146626, lng: -92.035548}}
                    className={"map"}
                    zoom={15}
                    style={{ height: '75%', width: "50%", position: 'relative'}}
                    // containerStyle={{ textAlign: "center" }}
                    >
                    <Marker 
                        position={{ lat: 30.146626, lng: -92.035548 }}
                        name="Province"
                        title={"This is where you are"}    
                    />
                </Map>
            </div>
          </div>
        )
    }
}

// const DeliveryMap = withGoogleMap((props) =>
//   <Map
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//   </Map>
// )


export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(DeliveryMap);