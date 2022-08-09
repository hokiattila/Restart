const request = require('request')


const forecast = (latitude, longitude, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=44ae918cf6df20cd1a956dc352ca7add&query=" +encodeURIComponent(latitude)+","+encodeURIComponent(longitude)+"&units=f" // Show results in Fahrenheit    

    request({url: url, json: true}, (error, response) => {
    if (error) {
        callback('Unable to connect to weather service.', undefined)
    } else if(response.body.error) {
        callback(response.body.error.info, undefined)
    } else {

        const data = {
            weather_descriptions: response.body.current.weather_descriptions[0],
            current_temperature: response.body.current.temperature,
            feelslike: response.body.current.feelslike
        }

        callback(undefined, data)
    }

    })

}

module.exports = forecast