const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    const notes = loadNotes()
    console.log("Listing notes...")
    if (notes.length === 0 ) {
        console.log("There are no notes")
        return
    }
    for( let i = 0; i < notes.length; i++) {
        console.log(`[${i+1}.] Title: ${notes[i].title} Body: ${notes[i].body}`)
    }
}

const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })


    if(duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('Note has been saved successfully.'))
        console.log('Title: ' + title)
        console.log('Body: ' + body)
    } else {
        console.log(chalk.red("A note with the same title already exists. Aborting..."))
    }
}

const saveNotes = function(array) {
    fs.writeFileSync('notes.json', JSON.stringify(array))
}

const loadNotes = function () {
    try {
    const notes = JSON.parse(fs.readFileSync('notes.json').toString())
    return notes
    }catch(e) {
        return []
    }
}


const removeNote = function(title) {
    console.log(`Removing note with title "${title}"....`)
    const notes = loadNotes()
    const notes_array = notes.filter(function (note) {
        return note.title !== title
    })
    if(notes.length === notes_array.length) {
        console.log(chalk.red(`No element was found by the title "${title}" in the database.`))
        return
    }
    saveNotes(notes_array)
    console.log(chalk.green("The not has been successfully removed!"))
}

module.exports = {
    addNote,
    getNotes,
    removeNote
}