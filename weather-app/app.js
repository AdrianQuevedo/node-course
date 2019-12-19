const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if(address){
    geocode(process.argv[2], (error, {latitude, longitude, location}) => {
        if(error) {
            return console.log('Error', error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
} else {
    console.log('Provider a city please')
}