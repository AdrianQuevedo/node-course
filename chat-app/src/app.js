const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

// Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.json())
io.on('connection', () => {
    console.log('New WebSocket connection')
})

// Setup de public directory for serve
app.use(express.static(publicDirectoryPath))

module.exports = server