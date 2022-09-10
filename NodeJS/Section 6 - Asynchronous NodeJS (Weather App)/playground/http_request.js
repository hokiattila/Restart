const http = require('http')
const url = "http://api.weatherstack.com/current?access_key=44ae918cf6df20cd1a956dc352ca7add&query=" +"40,-75"+"&units=f" // Show results in Fahrenheit    

const request = http.request(url, (response) => {
    
    let data = ''
    
    response.on('data', (chunk) => {
        data += chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log(error)
})

request.end()