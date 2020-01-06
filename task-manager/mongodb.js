// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { userNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Adrian',
    //     age: 28
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
        
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Cam',
    //         age:25
    //     },
    //     {
    //         name:'Ariel',
    //         age: 25
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Clean',
            completed: false
        },
        {
            description: 'Sort',
            completed: true
        },
        {
            description: 'Move on',
            completed: true
        }
    ], (error, result) => {
        if(error){
            return console.log('Unable to insert documents!')
        }

        console.log(result.ops)
    })

})