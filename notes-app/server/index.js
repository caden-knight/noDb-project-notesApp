const express = require('express')
const app = express()
const noteCtrl = require('./controllers/controller')
const SERVER_PORT = 4001
app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`Posting Stickies on port ${SERVER_PORT}`))

const baseUrl = '/api/notes'
const param = '/api/notes/:note_id'


app.get(baseUrl, noteCtrl.getAllNotes)
app.get(param, noteCtrl.getOneNote)
app.post(baseUrl, noteCtrl.createNewNote)
app.put(param, noteCtrl.editNote)
app.delete(param, noteCtrl.deleteNote)
