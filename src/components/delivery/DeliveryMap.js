import React, { Component } from 'react';
import { 
  Map,
  GoogleApiWrapper,
  Marker,
  withGoogleMap,
  withScriptjs,
  InfoWindow
 } from 'google-maps-react';
import { getDistance } from '../../actions/deliveries';
import '../../stylesheets/delivery/deliverymap.css';
import DestinationInput from './DestinationInput';
require('dotenv').config();
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.access_token = process.env.REACT_APP_MAPBOX_KEY

class DeliveryMap extends Component {
  
  map = new mapboxgl.Map({
    container: 'map-container',
    style: 'mapbox://styles/mapbox/streets-v11'
  });


  state = {
    address: '',
    visibleInfo: true,
    origins: { lat: 30.146626, lng: -92.035548},
    destinations: [] 
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // getDistance(this.state, process.env.REACT_APP_GOOGLE_API_KEY)
  }

  saveDestination = event => {
    this.state.destinations.push(event.target.value)
  }

    render() {
        return (
            <div id="map-container" className="map-container">
              <form className="destination-input" onSubmit={this.handleSubmit}>
                <DestinationInput 
                  saveDestination={this.saveDestination} 
                  handleChange={this.handleChange}
                  address={this.state.address}
                />
                <input type="submit" value="Check the Distance" />
              </form>
                <Map 
                    google={this.props.google}
                    initialCenter={this.state.origins}
                    className={"map"}
                    zoom={13}
                    style={{ height: '75%', width: "50%", position: 'relative'}}
                    >
                    <Marker 
                      position={{ lat: 30.146626, lng: -92.035548 }}
                      name="Province"
                      title={"This is where you are"}    
                      icon={{
                        url: './icon.png',
                        scaledSize: new this.props.google.maps.Size(37, 37) 
                      }}
                    />
                    <InfoWindow 
                      visible={this.state.visibleInfo}
                    >
                      <div className="info-window">
                        <p>You are here!</p>
                      </div>
                    </InfoWindow>

                </Map>
          </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(DeliveryMap);