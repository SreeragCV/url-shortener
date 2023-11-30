const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const {createShortUrl, getOneUrl, fetchOriginalUrl, renderNewForm} = require('./controllers/urls')

app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/tinyUrl').
then(() => {
    console.log('MONGO CONNECTION OPENED');
})
.catch(() => {
    console.log('ERROR CONNECTING TO DATABSE');
})

app.get('/url/:id', getOneUrl)
app.get('/create-short-url', renderNewForm)
app.post('/url', createShortUrl)
app.get('/:shortid', fetchOriginalUrl)

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})