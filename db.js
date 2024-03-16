const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/hotels';


mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const db =  mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB server.")
})

db.on('error', (err) => {
    console.error("MongoDB server connection error", err)
})

db.on('disconnected', () => {
    console.log("DisConnected to MongoDB server...")
})

module.exports = db;
