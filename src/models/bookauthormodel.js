
const mongoose = require('mongoose');

const bookAuthorSchema = new mongoose.Schema({


    name: String,
    auth_id:Number,
    price:Number,
    ratings: Number,
},

{ timestamps: true});


module.exports =mongoose.model('books',bookAuthorSchema);

