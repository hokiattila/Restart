const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)

fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer)
console.log(dataBuffer.toString())

const dataJSON = dataBuffer.toString()
let data = JSON.parse(dataJSON)
console.log(data.title)



data = JSON.parse(fs.readFileSync('2-json.json').toString())
data.name = "Attila"
data.age = 26

fs.writeFileSync('2-json-own.json', JSON.stringify(data))