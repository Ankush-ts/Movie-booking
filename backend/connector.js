const mongodb = require('mongodb');

//local mongo url : mongodb://localhost:27017/
const mongoURI = process.env.MONGODB_URL + 'bookMovie'

let mongoose = require('mongoose');
const { bookMovieSchema } = require('./schema')


mongoose.connect(mongoURI)
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
let collection_connection = mongoose.model('bookmovietickets', bookMovieSchema)


exports.connection = collection_connection;