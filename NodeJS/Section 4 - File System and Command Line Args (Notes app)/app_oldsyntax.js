const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes')
// console.log(process.argv)


// Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list 

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})


// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note.',
    builder: {
        title: {
            describe: 'The title which by the note gets removed.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})


// Create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes.',
    handler: function () {
        notes.getNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function () {
        console.log('Reading the given note.')
    }
}) 

yargs.parse() // To avoid the line below
// console.log(yargs.argv)