// mongoDB scheme
// define the structure and content of the document.

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
})

const userDB = mongoose.model('userdb', schema);

module.exports = userDB;