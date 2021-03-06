///Library function for google api 
const axios = require("axios");
const PLACES_API = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const DISTANCE_API = "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&departure_time=now"
const err = require("../util/error")

function checkStatus(response) {
    var errFlag = true;
    var error = new Error()

    if (response.status >= 200 && response.status < 300) {
        errFlag = false
    }
    if ( response.data.status == 'REQUEST_DENIED' 
        || response.data.status == 'MAX_DIMENSIONS_EXCEEDED' ) 
        {
        console.error("Gapi checkStatus ", response.data)
        errFlag = true
        error.resonse = err.GAPI_REQUEST_DENIED
    }
    if (errFlag) {
        throw error;
    } else {
        return response
    }
}

function getDistanceBetweenLatLong(origin, destinations) {
    const api = `${DISTANCE_API}&key=${GOOGLE_API_KEY}&origins=${origin}&destinations=${destinations}`
    return new Promise((resolve, reject) => {
        axios.get(api)
            .then(response => checkStatus(response))
            .then(response => resolve(response))
            .catch(err => {
                console.log("Gapi getDistanceBetweenLatLong Error : " + JSON.stringify(err))
                reject(err)
            })
    });
}

function getHospitalsFromLocationByRadius(params) {
    const lat = params.lat
    const long = params.long
    const radius = params.radius
    return new Promise((resolve, reject) => {
        const api = `${PLACES_API}location=${lat},${long}&radius=${radius}&type=hospital&key=${GOOGLE_API_KEY}`;
        axios.get(api)
            .then(response => checkStatus(response))
            .then(response => resolve(response))
            .catch(err => {
                console.log("getHospitalsFromLocationByRadius Error: " + JSON.stringify(err))
                reject(err)
            })
    });
}

module.exports = {
    getHospitalsFromLocationByRadius,
    getDistanceBetweenLatLong
}

