
require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

// Home route
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// 404 route
app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
