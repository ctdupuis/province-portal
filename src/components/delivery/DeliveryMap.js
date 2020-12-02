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
      width: "85vw",
      height: "75vh",
      zoom: 11
    },
    origins: {
      lat: 30.146626,
      lng: -92.035548
    },
    boundaries: [
      { lat: 30.13480050767714, lng: -92.10654263102711},
      { lat: 30.108900, lng: -92.059526 }
    ],
    address: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      address: event.target.children[0].value
    })
  }

  renderLocation = () => {
    if (this.state.address) {
      return <span className="location">Showing Location For "{this.state.address}"</span>
    }
  }

    render() {
        return (
          <section className="dash-container">
            <header className="dash-header">
              <h3>Delivery Map</h3>
            </header>

            <div className="dash-content">
              <form className="new-user-form" onSubmit={this.handleSubmit}>
                <input 
                  type="text" 
                  name="address"
                  placeholder="Enter address..." 
                  // onChange={this.handleChange}
                  />

                <input className="new-user-sbmt" type="submit" value="Check Location" />
                {this.renderLocation()}
              </form>

              <div className="map">
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
            </div>




          </section>
        )
    }
}

export default DeliveryMap;