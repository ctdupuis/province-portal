import React, { Component, useRef } from 'react';
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
import mapboxgl from 'mapbox-gl';
require('dotenv').config();
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.access_token = process.env.REACT_APP_MAPBOX_KEY

class DeliveryMap extends Component {
  mapContainerRef = () => useRef(null);
  
  componentDidMount(){
    const map = new mapboxgl.Map({
      container: this.mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
  })
  };


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
            <div id="map-container" className="map-container" ref={this.mapContainerRef}>
              <form className="destination-input" onSubmit={this.handleSubmit}>
                <DestinationInput 
                  saveDestination={this.saveDestination} 
                  handleChange={this.handleChange}
                  address={this.state.address}
                />
                <input type="submit" value="Check the Distance" />
              </form>
          </div>
        )
    }
}

// export default GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_API_KEY
// })(DeliveryMap);
export default DeliveryMap;