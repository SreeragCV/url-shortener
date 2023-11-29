const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true
    },
    originalUrl: {
        type: String,
        required: true
    },
    expirationTime: {
        type: Date,
        required: true
    }
})

const Url = mongoose.model('Url', urlSchema);

module.exports = Url