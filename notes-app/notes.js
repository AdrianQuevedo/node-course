const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if(noteToRead) {
        console.log(chalk.green.inverse(noteToRead.title))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red.inverse("No note found with the title: "+title))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bold('"Your notes"'))
    notes.forEach((note) => console.log(chalk.green(note.title)));
}

const removeNote = (title) =>{
    const notes = loadNotes()
    const notesDontRemove = notes.filter((note) => note.title !== title)
    if(notesDontRemove.length< notes.length){
        saveNotes(notesDontRemove)
        console.log(chalk.green.inverse.bold('Remove note with the title: '+title))
    } else {
        console.log(chalk.red.inverse.bold('Not exists the note with the title: '+title))
    }
}

const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}