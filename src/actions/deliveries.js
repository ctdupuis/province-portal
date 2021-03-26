import axios from 'axios';
import { API_ROOT } from '../constants';
require('dotenv').config();

export const getGeocode = async function(location) {
    let address = location.address.split(' ').join('+');
    let city = location.city
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address},+${city},+LA&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    const response = await axios.get(url)
    const data = response.data.results[0]
    const coords = { 
        place_id: data.place_id, 
        address: data.formatted_address, 
        position: {
            lat: data.geometry.location.lat, 
            lng: data.geometry.location.lng
        }
    }
    return coords
}

export const finalizeRoute = (data, origin) => {
    const postObj = {
        locations: [...data.locations],
        mileage: data.mileage
    }
    // const addresses = await data.locations.map((add) => {
    //     return getGeocode(add).then(res => {return res.place_id} )
    // })
    // const addresses = data.locations.map((a) =>  a.address.split(" ").join("+") )
    // console.log(addresses)
    // return async (dispatch) => {
    //     let preURL = `https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${origin.place_id}&waypoints=`
    //     let appURL = `&destination=${origin.place_id}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    //     let builtURL = ``
    //     let i = 0;
    //     while (i < addresses.length) {
    //         builtURL += `via:${addresses[i]}|`
    //     }
    //     let finalURL = `${preURL}${builtURL}${appURL}`
    //     debugger
    // }
    
    // const directions = await getDirections(data, origin)
    return async (dispatch) => {
        dispatch({ type: 'START_LOAD' })
        const response = await axios.post(`${API_ROOT}/delivery_entries`, 
        postObj,
        { withCredentials: true  })
        const data = response.data
        dispatch({ type: 'END_LOAD' })
    }
}

//

export const getDirections = async function(locations, origin) {
    const url = `https://maps.googleapis.com/maps/api/directions/`
}