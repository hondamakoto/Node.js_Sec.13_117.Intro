//CRUD Create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.id.length)
// console.log(id.toHexString().length)

// console.log(id.getTimestamp())


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    // console.log('Connected correctly')
    const db = client.db(databaseName)


    db.collection('tasks').updateMany({
        completed: {$ne: true}
    }, {
        $set: {
            completed: true
        }
    }
    ).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })










    // db.collection('users').updateOne({
    //     _id: new ObjectID("5d25eece9639d21c70540003")
    // }, {
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })



    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5d25eece9639d21c70540003")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })





    // db.collection('users').find({age: 19}).toArray((error, users) => {
    //            console.log(users)
    // })
    // db.collection('users').find({age: 19}).count((error, count) => {
    //            console.log(count)
    // })


    // db.collection('tasks').findOne({ _id: new ObjectID("5d25fba12ed64c10286697ea") }, (error, task) =>{
    //     if (error) {
    //         return ('Unable to fetch')
    //     }
    //     console.log('Last task by ID:')
    //     console.log(task)
    // })


    // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
    //     if (error) {
    //         return ('Unable to fetch')
    //     }
    //     console.log('Completed task:')
    //     console.log(tasks)
    // })



    // // db.collection('users').findOne({name: 'Jane', age: 1}, (error, user) => {
    // db.collection('users').findOne({_id: new ObjectID("5d273b514e6d101c28adb117")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })







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