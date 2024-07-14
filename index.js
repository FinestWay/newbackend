require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000

app.get('/', (req,res) => {
    res.send('Hello you are now in the App which us actually running')
})

app.get('/login', (req,res) => {
    res.send('<h1> <i> You are redirected in Login page </i> </h1>')
})

app.get('/contacts', (req,res) => {
    res.send('<h1> Now you are in contacts page </h1>')
})

app.listen(process.env.PORT, () => {
    console.log("App is running on the port ", port);
})