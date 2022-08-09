const request = require('request')

const url = "http://api.weatherstack.com/current?access_key=44ae918cf6df20cd1a956dc352ca7add&query=37.8267,-122.4233&units=f" // Show results in Fahrenheit

request({url: url, json: true}, (error, response) => {
    console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);    
})