//CRUD Create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString().length)

// console.log(id.getTimestamp())


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    // console.log('Connected correctly')
    const db = client.db(databaseName)


    // db.collection('users').insertOne({
    //     name: 'Victoria',
    //     age: 26
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
 
 
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Feed the cat',
    //         completed: true
    //     }, {
    //         description: 'Charge the phone',
    //         completed: false
    //     }, {
    //         description: 'Put plants',
    //         Completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.ops)
    // })


})