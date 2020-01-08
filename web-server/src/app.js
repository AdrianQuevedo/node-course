const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const app = express()
const port = process.env.PORT || 3000

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
        title: 'About',
        name: 'Adrian Quevedo'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide a address for the search'
        })
    }

    geocode(req.query.address, (error, {latitude, longitude, location} = {})=>{
        if(error) {
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products: []
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

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: 'Error 404',
        msg: 'Help article not found',
        name: 'Adrian Quevedo'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Error 404',
        msg: 'Page not found',
        name: 'Adrian Quevedo'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})