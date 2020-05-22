const express = require('express')
const app = express()
app.use(express.json())
const SERVER_PORT = 6969

app.listen(() => SERVER_PORT, console.log(`Posting Stickies on port ${SERVER_PORT}`))
