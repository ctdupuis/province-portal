import React, { Component } from 'react';
import '../../stylesheets/delivery/deliverymap.css';
import DestinationInput from './DestinationInput';
import ReactMapGL from 'react-map-gl';
require('dotenv').config();

class DeliveryMap extends Component {

  state = {
    viewport: {
      latitude: 30.146626,
      longitude: -92.035548,
      width: "50vw",
      height: "50vh",
      zoom: 14
    },
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
          <div className="map">
            <ReactMapGL 
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
              {...this.state.viewport}
              onViewportChange={newView => {
                this.setState({
                  ...this.state,
                  viewport: newView
                })
              }}
              >Markers here
            </ReactMapGL>
          </div>
        )
    }
}

export default DeliveryMap;