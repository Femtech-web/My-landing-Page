const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile( __dirname + "/index.html")
})

app.get('/index.html', (req, res) => {
    res.sendFile( __dirname + "/index.html")
})

app.get('/about.html', (req, res) => {
    res.sendFile( __dirname + "/about.html")
})

app.get('/services.html', (req, res) => {
    res.sendFile( __dirname + "/services.html")
})

app.get('/contact.html', (req, res) => {
    res.sendFile( __dirname + "/contact.html")
})


// app.post('/example', (req, res) => {
//     console.log(req.body)
// })

app.post('/bookings', (req, res) => {
    console.log(req.body)
})

app.post('/bookings2', (req, res) => {
    console.log(req.body)

    res.sendFile(__dirname + "/booking.html")
})

app.post('/home', (req, res) => {
    res.redirect('/index.html')
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})