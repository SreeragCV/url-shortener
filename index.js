const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const {createShortUrl, getUrl, newUrl} = require('./controllers/urls')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/tinyUrl').
then(() => {
    console.log('MONGO CONNECTION OPENED');
})
.catch(() => {
    console.log('ERROR CONNECTING TO DATABSE');
})

app.get('/url/shorten', newUrl)
app.post('/url', createShortUrl)
app.get('/:shortid', getUrl)

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})