const https = require('https')
const url = 'https://api.darksky.net/forecast/b5dd61c8f0a076ba02305a69562f7ef8/40,-75'

const request = https.request(url, (response) =>{
    let data = ''

    response.on('data', (chuck) => {
        data = data + chuck.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()