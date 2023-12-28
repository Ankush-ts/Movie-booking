const mongoose = require('mongoose');
const mongodb = require('mongodb');


//local mongo url : mongodb://localhost:27017/
const mongoURI = `mongodb+srv://ankushrana9458:${process.env.MONGODB_PWD}@cluster0.38osesy.mongodb.net/?retryWrites=true&w=majority` + "bookMovie"


const { bookMovieSchema } = require('./schema')


mongoose.connect(mongoURI)
    .then(() => { console.log("connection established with mongodb server online"); })
    .catch(err => {
        console.log("error while connection", err)
    });
let collection_connection = mongoose.model('bookmovietickets', bookMovieSchema)


exports.connection = collection_connection;

