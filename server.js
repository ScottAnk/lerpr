const express = require('express')
const path = require('path')
const logger = require('morgan')
const cors = require('cors')

// load environment variables and open database connection
require('dotenv').config()
require('./config/database')

// initialize the express server and Socket.IO
const app = express()

app.use(logger('dev'))
// Process data in body of request if
// Content-Type: 'application/json'
// and put that data on req.body
app.use(express.json())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:3000` }))
// app.use(express.static(path.join(__dirname, 'build')))

// middleware that adds the user object from a JWT to req.user
app.use(require('./config/checkToken'))

// Put all API routes here (before the catch-all)
app.use('/api/users', require('./routes/api/users'))
app.use('/api/sandboxes', require('./routes/api/sandboxes'))
app.use('/api/curves', require('./routes/api/curves'))

// Protect the api routes below from anon users
const ensureLoggedIn = require('./config/ensureLoggedIn')

// 'catch-all' route that will match all GET requests
// that don't match an API route defined above
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })

const port = process.env.PORT || 3001

app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
})
