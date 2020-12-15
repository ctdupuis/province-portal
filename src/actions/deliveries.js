import axios from 'axios';
require('dotenv').config();

export const getGeocode = async function(location){
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

    // debugger
    return coords
}

export const establishBounds = async function(bounds) {
    let origin = bounds[0]
    let waypoints = bounds.slice(1)
    let pointsUrl = `https://maps.googleapis.com/maps/api/directions/json?
    origin=${origin.lat},${origin.lng}&destination=${origin.lat},${origin.lng}&waypoints=`
    let keyString = `&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    // buildUrl(pointsUrl, waypoints, keyString).then(r => fetchRoute(r)).catch(err => console.log(err))
    // debugger
}

const fetchRoute = async function(url) {
    let sanitized = url.trim();
    // debugger
    const response = await axios.get(sanitized)
}

const buildUrl = async function(pointsUrl, waypoints, keyString) {
    waypoints.forEach(point => {
        pointsUrl += `${point.lat}%2C${point.lng}|`
    })
    return pointsUrl.slice(0, pointsUrl.length - 1) + keyString
}

export const getDistance = (data) => {
    let address = data.address.split(' ').join('+');
    let url = `https://maps.googleapis.com/maps/api/directions/json?
    origin=&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    debugger
    axios.get(url).then(r => console.log(r))
}
