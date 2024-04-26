const mongoose = require('mongoose');

const serverURL = 'mongodb://127.0.0.1:27017/CollegeBoys';

mongoose.connect(serverURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Conected to the mongo db server!');
})

db.on('error', (err) =>{
    console.log('mongo connection error', err);
})

db.on('discanected', ()=>{
    console.log('its discanected');
})

module.exports = db;