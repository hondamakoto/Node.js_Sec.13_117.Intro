// CRUD operatins

const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     // console.log(req.method, req.path)
//     // next()
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

app.use((req, res, next) => {
    res.status(503).send('Currenlty maintenance mode')
})





app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const bcrypt = require('bcryptjs')
// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(password)
//     console.log(hashedPassword)
//     const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
//     console.log(isMatch)
// }

const jwt = require('jsonwebtoken')
const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

// a token consists of three parts.
// The first part is base-64 encoded header which means what kind of token (JWT) and its generation algorithm
// The second part is base-64 encoded  payload or body which means encoded json string or data we provided. In our case that is { _id: 'abc123' }.
// The thir part is a signature which is used to verify the token.
// The base-64 decode can be done by input into https://www.base64decode.org/
// 1st: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9 -> {"alg":"HS256","typ":"JWT"}
// 2nd: eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE1NjU0OTE1NzZ9 -> {"_id":"abc123","iat":1565491576}
// 3rd: xwXUG4vfEd8MkKX6AUN4BgxXRzDqP8A3muKWwsB1NdQ -> No printable characters found, try another source charset, or upload your data as a file for binary decoding.



myFunction()