const mongoose = require('mongoose');
const mongodb = require('mongodb');


// const mongoURI= "mongodb://localhost:27017/" + "bookMovie"
const mongoURI = `mongodb+srv://ankushrana9458:${process.env.MONGODB_PWD}@cluster0.38osesy.mongodb.net/?retryWrites=true&w=majority`;


const { bookMovieSchema } = require('./schema')


mongoose.connect(mongoURI)
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
let collection_connection = mongoose.model('bookmovietickets', bookMovieSchema)


exports.connection = collection_connection;

