import React, { Component } from 'react';
import '../../stylesheets/delivery/deliverymap.css';
import Loading from '../static/Loading';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import { getGeocode, establishBounds } from '../../actions/deliveries';
import { FaLessThanEqual } from 'react-icons/fa';
require('dotenv').config();

class DeliveryMap extends Component {
  componentDidMount(){
    establishBounds(this.state.boundaries);
  }

  state = {
    location: {
      address: "",
      city: "Lafayette"
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
    destinations: [],
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    polyline: "sy_wDt_bqP}IeI`@y@Ny@Zi@p@eBHm@EkACoAnEwKxFyN|DcJ`@wA@Yf@@~Cc@fAM^Av@LjH|ExJcUdD}H^gBTuBf@}CnCwLzDqKhIqTfBcE|C}Ep@sAp@y@LB`@KPa@?QTaADy@|AoDvJkUzMc[bAqAfAo@r@U~@Mf@AjHZdR@fANx@ZjIvF|N`KnAfA~GnHzHrIp@f@h@Vp@Pz@H|@?v@MxBaAjHqEnDuCl@]fAa@lK_BlHeA_CaPI_B\\oBHeAAcKAuVKu|@Mol@LCL]M[MEA}NJwMRsSEsa@?kMRaBHMtO@zGLdERfEErM_A~AKbIEpBAdHArCGrBU|AUNOl@Qp@[|AiAjA{Af@aA`@kAtA{GdE_T`BoIv@cEtBsLfGsZl@eBvAiCzAgC|IeKhC}C|@wAj@uAXqARkAVeD@aCGuAHu@DAFGHWAYOQWCSLEJy@HqNAA_ZC_`A?kLmKAuK?yWCy]?oV?cy@CqRECyVAyPDiIFAHI@OGMMCKDELq@DgSCk]Ak`@E_D?{C?Ps@j@yBx@wCt@kBpAoBYc@q@s@SKe@Mk@A}@Ac@Kk@Y_@e@Se@I_@GkAGeJGaMgIGe@F[Vc@l@mCfD_AZsC?yXDqTD{DB[?CTSdA[~@Wj@}@fAoGtF[b@O`@eBzNmA|KsAxM[pEWpGSnDq@lFwBdOy@rDcB`FeBjDaChEqGdLqA`B_A~@qB|A_EpC}ClCgBrB{BzCaAvAw@`B_DrLy@~BsFzIq@nAiAbBgBrCgT|\\uBxC{AdBmBtAkB|@sA`@iCb@mCLeSFuCJgBZiA\\gBz@}BlB_ErEmBlAs@\\Ok@Y_A]d@MNEOQk@y@\\o@R{@XGJCFBJV`ANp@k@R_Cx@aA\\cCz@yAx@}B|BkPbTw[|a@wCpD_Az@_BhAmCbA}ATwIb@kIj@qL~@iCJwGD{@G_@Ia@h@{@fAuBpCaGrItBfHxEhQdBpGVfB@fBYjCSv@m@dAuGfIaBrBw@jAu@jBsChJ_AfCaB~B{C~DiOxRcApA|@bBh@dAbCxEdChF`@fAjB|GdGfb@lAfGj@~B~AzFpAxDxAlCbCvChA`AfBfAhAj@lHtCdG~BhHtCtC|AvCxB|BzBxI~InJxJnk@ll@hRrRrBlBZZlAdAPh@tA|AnEnEjHrH|JfKxBrBxC`C|BpA|B~@dIbCpD`AhRhFxOhE|ErAhFfBpAl@~BtArGtFhYjWdMfLzAtATc@GGo@k@"
  }

  constructUrl = () => {
    let str = ``
    this.state.boundaries.forEach(bound => {
      str.concat(`${bound.lat},${bound.lng}`)
    })
  }

  handleChange = event => {
    this.setState({
      location: {
        ...this.state.location,
        address: event.target.value
      }
    })
  }

  setCity = event => {
    this.setState({ 
      location: {
        ...this.state.location,
        city: event.target.value
      }
    })
  }

  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: {}
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    getGeocode(this.state.location).then(dest => this.setState({
      ...this.state,
      destinations: [...this.state.destinations, dest]
    }))
  }

  renderDestinations = () => {
    if (this.state.destinations.length > 0) {
      return this.state.destinations.map( destination => {
        return <Marker 
        key={destination.place_id}
        name={destination.address}
        position={destination.position} 
        onClick={this.onMarkerClick}
        icon={{
          url: './marker.png',
          scaledSize: new this.props.google.maps.Size(37, 37)
        }}
        />
      })
    }
  }

    render() {
      const loading = this.props.loading
      const mapStyles = {
        height: "70%",
        width: "50%",
        position: "static"
      }
      // const bounds = new this.props.google.maps.LatLngBounds();
      // for (let i = 0; i < this.state.boundaries.length; i++) {
      //   bounds.extend(this.state.boundaries[i]);
      // }
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
                  onChange={this.handleChange}
                />
                <select id="city-select" value={this.state.city} onChange={this.setCity}>
                  <option value="Lafayette">Lafayette</option>
                  <option value="Youngsville">Youngsville</option>
                  <option value="Broussard">Broussard</option>
                </select>

                <input className="new-user-sbmt" type="submit" value="Check Location" />              
              </form>


              <div className="map-container">
                <Map
                  google={this.props.google}
                  initialCenter={this.state.origins}
                  zoom={12}
                  style={mapStyles}
                  className={"map"}
                >
                  {/* <Polyline
                    path={"{x_wDdbbqPHFTc@GGo@k@"}
                    
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2} /> */}
                  <Marker 
                    position={this.state.origins}
                    name={"Province Pharmacy"}
                    title={"You are here"}
                    onClick={this.onMarkerClick}
                    icon={{
                      url: '/icon.png',
                      scaledSize: new this.props.google.maps.Size(37, 37)
                    }}
                  />
                  {this.renderDestinations()}
                      <InfoWindow
                        visible={this.state.showingInfoWindow}
                        marker={this.state.activeMarker}
                        onClose={this.onClose}
                      >
                        <div className="marker-info">
                          <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                      </InfoWindow>
                {/* {this.state.boundaries.map(location => {
                  return <Marker position={location} icon={{url: '/marker.png', scaledSize: new this.props.google.maps.Size(37, 37)}} />
                })} */}
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

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(DeliveryMap);