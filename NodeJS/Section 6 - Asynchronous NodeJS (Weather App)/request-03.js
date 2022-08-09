const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=44ae918cf6df20cd1a956dc352ca7add&query=37.8267,-122.4233&units=f" // Show results in Fahrenheit

const url_error = "http://api.weatherstack.com/current?access_key=44ae918cf6df20cd1a956dc352ca7add&query="

request({url: url, json: true}, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service.')
  } else if(response.body.error) {
    console.log(response.body.error.info)
  } else {
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);    
  }

})

// Geocoding
// Address -> lat/long -> weather

const axios = require('axios')
const params = {
    access_key: '0f738598a16b117f4cf6447dc6d27a66',
    query: "Bad Schallerbach"
}



// Using position stack documentation
axios.get('http://api.positionstack.com/v1/forward', {params})
  .then(response => {
   // console.log(response.data.data);
    console.log(`The latitude and longitude for ${params.query} are (${response.data.data[0].latitude},${response.data.data[0].longitude})`)
  }).catch(error => {
    console.log(error);
  })
