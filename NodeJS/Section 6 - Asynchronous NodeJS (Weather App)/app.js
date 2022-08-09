const geocode = require('./geocode')
const forecast = require('./forecast')

geocode('Bad Schallerbach', (error, data) => {
  console.log(`${JSON.stringify(data)}, ERROR: ${error}`)
})

forecast('37.8267','-122.4233', (error, data) => {
  console.log(`${JSON.stringify(data)}, ERROR: ${error}`)
})