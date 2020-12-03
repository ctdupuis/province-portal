import React, { Component } from 'react';
import '../../stylesheets/delivery/deliverymap.css';
import DestinationInput from './DestinationInput';
import ReactMapGL from 'react-map-gl';
import Loading from '../static/Loading';

import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { getGeocode } from '../../actions/deliveries';
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
      {lat: 30.150839490122195, lng: -92.09357565868899},
      {lat: 30.10956547664899, lng: -92.05924338426283},
      {lat: 30.084911616736843, lng: -91.9905788354105},
      {lat: 30.131540840461998, lng: -91.96482962959087},
      {lat: 30.176960877413638, lng: -92.00190848597113},
      {lat: 30.206932573334075, lng: -92.0379573741186}
    ],
    address: '',
    test: "",
    destinations: []
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // this.setState({
    //   ...this.state,
    //   address: event.target.children[0].value
    // })
    getGeocode();
  }

  renderLocation = () => {
    if (this.state.address) {
      return <span className="location">Showing Location For "{this.state.address}"</span>
    }
  }

  testClick = () => {
    this.setState({
      ...this.state,
      test: {lat: 30.147027679654673, lng: -92.01448751773326}
    })
  }

  renderMarker = () => {
    if (this.state.test) {
      return <Marker 
      position={this.state.test} 
      icon={{
        url: './marker.png',
        scaledSize: new this.props.google.maps.Size(37, 37)
      }}
      />
    }
  }

    render() {
      const loading = this.props.loading
      const mapStyles = {
        height: "70%",
        width: "50%",
        position: "static"
      }
        return (
          loading ? <Loading /> :
          <section className="dash-container">
            <header className="dash-header">
              <h3>Deliveries</h3>
            </header>

            <div className="dash-content">
              <form className="new-user-form" onSubmit={this.handleSubmit}>
                <input 
                  type="text" 
                  name="address"
                  placeholder="Enter address..." 
                />

                <input className="new-user-sbmt" type="submit" value="Check Location" />
                
              </form>
              <button onClick={this.testClick}>Try Rendering a Marker</button>

              <div className="map-container">
                <Map
                  google={this.props.google}
                  initialCenter={this.state.origins}
                  zoom={11.5}
                  style={mapStyles}
                  className={"map"}
                >
                  <Marker 
                    position={this.state.origins}
                    name="Province"
                    icon={{
                      url: '/icon.png',
                      scaledSize: new this.props.google.maps.Size(37, 37)
                    }}
                  />
                  {this.renderMarker()}
                {this.state.boundaries.map(location => {
                  return <Marker position={location} icon={{url: '/marker.png', scaledSize: new this.props.google.maps.Size(37, 37)}} />
                })}
                </Map>
            </div>
            <br />
                <div className="user-info-title">
                  Plan Your Route
                </div>
                <div className="user-info-content">
                  <input type="text" placeholder="Enter address..." name="destination" />
                  <br />
                  <button className="new-user-sbmt">Add Another Destination</button>
                </div>
                <button className="new-user-sbmt">Finalize Route</button>
              </div>
          </section>
        )
    }
}

// export default DeliveryMap;
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(DeliveryMap);