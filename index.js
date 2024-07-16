require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req,res) => {
    res.send('<h1> You are in home page </h1>')
})

app.get('/contacts', (req,res) => {
    res.send('<h1> You are in contacts page </h1>')
})

app.get('/about', (req,res) => {
    res.send('<h1> This is about page </h1>')
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}` );
})