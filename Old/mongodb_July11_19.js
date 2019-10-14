//CRUD Create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    // console.log('Connected correctly')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Smith',
    //     age: 19
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)

    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jane',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    //     }
    // )
    db.collection('tasks').insertMany([
        {
            description: 'Feed the cat',
            completed: true
        }, {
            description: 'Charge the phone',
            completed: false
        }, {
            description: 'Put plants',
            Completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks')
        }
        console.log(result.ops)
    })






})