const fs = require('fs')
 // const city = require('./utils.js') 
const utils = require('./utils.js') // Have to provide a relative path 
const getNotes = require('./notes_practice.js')

fs.writeFileSync('notes.txt', 'My name is Attila.')
fs.appendFileSync('notes.txt', '\nThis message was appended by Node.js!')

const name = 'Attila'
console.log(name)
// console.log(city) // From utils.js
console.log(utils.city) // From utils.js

const sum = utils.add(4, -2)
console.log(sum)

console.log(getNotes())

const validator = require('validator')

// ES6 syntax => import validator from 'validator' NOT SUPPORTED YET

const str = "hoki.attila@gmail.com"
const str2 = "https://www.google.com"

console.log(validator.isEmail(str))
console.log(validator.isEmail(str2))
console.log("\n");

console.log(validator.isURL(str))
console.log(validator.isURL(str2))

const chalk = require('chalk')
console.log(chalk.green('Success!'))
console.log(chalk.bgRed.bold('ERROR'))
console.log(chalk.bgGreen.italic.bold('Italic'))