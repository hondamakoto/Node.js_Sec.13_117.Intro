const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            // if (value.length <7) {
            //     throw new Error("Must have more than 6 characters.")
            // }
            if (value.toLowerCase().includes('password')) {
                throw new Error('Must not include "password".')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive number')
            }
        }
    }
})

// const me = new User({
//     name: '      Mcdonald       ',
//     email: 'MACDONALD@hotmail.COM     ',
//     age: 88,
//     password: 'passwordphone'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
})

const task =new Task({
    description: '   Eat lunch   '
    // completed: true
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error', error)
})







