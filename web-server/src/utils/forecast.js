const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b5dd61c8f0a076ba02305a69562f7ef8/' + latitude + ',' + longitude + '?units=si'
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.daily.data[0])
            const temperature = body.currently.temperature
            const precipProbability = body.currently.precipProbability
            const result = body.daily.data[0].summary+ 'It si currently '+temperature+' degrees out. there is a '+ precipProbability + '% chance of rain. The maximun Temparature for today is '+body.daily.data[0].temperatureMax+ ' and the minimun temperature is '+body.daily.data[0].temperatureMin
            callback(undefined, result)
        }
    })
}

module.exports = forecast