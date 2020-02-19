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

io.on('connection', (socket) => {
    console.log('New WebSocket connection')
    socket.broadcast.emit('message', 'A new user has joined!')
    socket.emit('message', 'Welcome!')
    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })
    socket.on('sendLocation', (coords) => {
        socket.broadcast.emit('message', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
    })

    socket.on('disconnect', () => {
        io.emit('message', 'A user has left!')
    })
})

// Setup de public directory for serve
app.use(express.static(publicDirectoryPath))

module.exports = server