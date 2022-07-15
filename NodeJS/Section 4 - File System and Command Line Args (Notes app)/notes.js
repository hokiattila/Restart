const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
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

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.tite === title)
    
    if(!duplicateNote) {
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

const saveNotes = (array) => {
    fs.writeFileSync('notes.json', JSON.stringify(array))
}

const loadNotes =  () => {
    try {
    const notes = JSON.parse(fs.readFileSync('notes.json').toString())
    return notes
    }catch(e) {
        return []
    }
}


const removeNote = (title) => {
    console.log(`Removing note with title "${title}"....`)
    const notes = loadNotes()
    const notes_array = notes.filter((note) => note.title !== title)
    if(notes.length === notes_array.length) {
        console.log(chalk.red(`No element was found by the title "${title}" in the database.`))
        return
    }
    saveNotes(notes_array)
    console.log(chalk.green("The note has been successfully removed!"))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse("No note found"))
    }
}

module.exports = {
    addNote,
    getNotes,
    removeNote,
    readNote
}