const mongoose = require("mongoose");

const SingIn = new mongoose.Schema({
    name:{
        type:'String',
        require: true
    },
    Passworld:{
        type:'String',
        require: true
    },
    age:{
        type:'Number',
        require: true
    }
})

const Singin = mongoose.model('SingIN', SingIn);

module.exports = Singin;