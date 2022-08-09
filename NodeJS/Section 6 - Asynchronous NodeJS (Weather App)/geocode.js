const axios = require('axios')

const geocode = (address, callback) => {
    
    const params = {
        access_key: '0f738598a16b117f4cf6447dc6d27a66',
        query: address
    }

    axios.get('http://api.positionstack.com/v1/forward', {params})
    .then(response => {
    const result = {
        latitude: response.data.data[0].latitude,
        longitude: response.data.data[0].longitude
    }

    callback(undefined, result)

}).catch(error => {
    callback(error, undefined)
})
}

module.exports = geocode