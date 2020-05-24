const userNotes = require('../user_notes')
let id = (userNotes.length) + 1

module.exports = {
    getAllNotes: (req, res) => { 
        res.status(200).send(userNotes)
    },

    getOneNote: (req, res) => {
        const { note_id } = req.params
        const index = userNotes.findIndex(note => +note_id === note.id)

        if (index === -1) {
            return res.status(404).send("Sorry, we couldn't find that note")
        }
        
        res.status(200).send(userNotes[index])
    },

    editNote: (req, res) => { 
        const { note_id } = req.params
        const { title, date, note } = req.body
        const index = userNotes.findIndex(notes => notes.id === +note_id)
        if (index === -1) {
            return res.status(404).send('Note not found')
        }
        const updatedNote = {
            id: +note_id,
            title: title || userNotes[index].title,
            date: date || userNotes[index].date,
            dateModified: new Date(),
            note: note || userNotes[index].note
        }

        userNotes.splice(index, 1)
        userNotes.unshift(updatedNote)


        res.status(200).send(userNotes)
    },

    createNewNote: (req, res) => { 
        const {title, date, note} = req.body
        const newNote = {
            id, title, date, note
        }
        id++
        userNotes.unshift(newNote)
        res.status(200).send(userNotes)
    },

    deleteNote: (req, res) => { 
        const { note_id } = req.params
        const index = userNotes.findIndex(notes => notes.id === +note_id)
        if (index === -1) {
            return res.status(404).send('Note not found')
        }
        userNotes.splice(index, 1)
        res.status(200).send(userNotes)

    }
}
