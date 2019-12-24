const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup de public directory for serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Adrian Quevedo'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Weather App',
        name: 'Adrian Quevedo'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Tandil',
        temperature: 29
    }) 
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        msg: 'Please contact with the creator of the page',
        name: 'Adrian Quevedo',
        error: 404
    }) 
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
//app.com
//app.com/help
//app.com/about