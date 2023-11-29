const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {createShortUrl, getUrl} = require('./controllers/urls')
const Url = require('./models/url')

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/tinyUrl').
then(() => {
    console.log('MONGO CONNECTION OPENED');
})
.catch(() => {
    console.log('ERROR CONNECTING TO DATABSE');
})

app.post('/shorten', createShortUrl)

app.get('/:shortid', getUrl)


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})