const express = require('express')
const app = express()
const noteCtrl = require('./controllers/controller')
app.use(express.json())
const SERVER_PORT = 6969

app.listen(() => SERVER_PORT, console.log(`Posting Stickies on port ${SERVER_PORT}`))

const baseUrl = '/api/user_notes'
const param = '/:noteId'

app.get(baseUrl, noteCtrl.getAllNotes)
app.post(baseUrl, noteCtrl.createNewNote)
app.put(baseUrl + param, noteCtrl.editNote)
app.delete(baseUrl + param, noteCtrl.deleteNote)
