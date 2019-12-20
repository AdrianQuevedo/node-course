const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')

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
        error: 404
    }) 
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})
//app.com
//app.com/help
//app.com/about