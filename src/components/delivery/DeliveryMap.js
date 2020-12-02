import React, { Component } from 'react';
import '../../stylesheets/delivery/deliverymap.css';
import DestinationInput from './DestinationInput';
import ReactMapGL, { Marker } from 'react-map-gl';
require('dotenv').config();

class DeliveryMap extends Component {

  state = {
    viewport: {
      latitude: 30.146626,
      longitude: -92.035548,
      width: "75vw",
      height: "75vh",
      zoom: 11
    },
    origins: {
      lat: 30.146626,
      lng: -92.035548
    },
    marker: {
      lat: 30.14796675005706, 
      lng: -92.0141882385185
    },
    boundaries: [
      { lat: 30.13480050767714, lng: -92.10654263102711},
      { lat: 30.108900, lng: -92.059526 }
    ],
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
          <section className="dash-container">
            <header className="dash-header">
              <h3>Delivery Map</h3>
            </header>

            <div className="dash-content map">
              <form className="new-user-form">
                <label>Address</label>
                <input type="text" placeholder="Enter address..." />

                <input className="new-user-sbmt" type="submit" value="Check Location" />
              </form>
              <ReactMapGL 
                boundaries={this.state.boundaries}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
                {...this.state.viewport}
                onViewportChange={newView => {
                  this.setState({
                    ...this.state,
                    viewport: newView
                  })
                }}
              >
                <Marker latitude={this.state.origins.lat} longitude={this.state.origins.lng}>
                  <span className="marker-img">
                    <img className="province-marker" src="/icon.png" alt="Province Icon" />
                  </span>
                </Marker>
                {this.state.boundaries.map(location => {
                  return (
                  <Marker latitude={location.lat} longitude={location.lng}>
                    <img src="./marker.png" alt="boundary" className="province-marker" />
                    <span>Don't go passed here</span>
                  </Marker>
                  )
                })}
              </ReactMapGL>
            </div>
          </section>
        )
    }
}

export default DeliveryMap;