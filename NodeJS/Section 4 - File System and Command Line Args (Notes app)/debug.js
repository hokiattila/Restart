const fs = require('fs')

try {
    const notes = JSON.parse(fs.readFileSync('notes.json').toString())
    console.log(notes)
    }catch(e) {
        console.log(e)
    }