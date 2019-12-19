const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

//
// Challenge: Work with JSON and the file system
//
//1. Load and parse the JSON data
//2. Change the name and age property using your info
//3. Strigify the change object and overwrite the original data
//4. Test your work by viewing data in the JSON file

const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer.toString())
data.name = 'Adrian'
data.age = 28

fs.writeFileSync('1-json.json',JSON.stringify(data))