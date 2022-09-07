const geocode = require('./geocode')
const forecast = require('./forecast')


const address = process.argv[2]
if (!address) return console.log("Please provide an argument.")
geocode(address, (error, data) => {
  console.log(`${JSON.stringify(data)}, ERROR: ${error}`)
  if (error) {
    return console.log(error)
  }
  // Callback chaning
  forecast(data.latitude,data.longitude, (error, forecastData) => {
    if (error) return console.log(error)
    console.log(`${JSON.stringify(forecastData)}, ERROR: ${error}`)
  })
})