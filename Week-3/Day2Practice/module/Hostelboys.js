const mongoose = require('mongoose');

const Hostelboys = new mongoose.Schema({
    name:{
        type:'String',
        require: true
    },
    lastName:{
        type:'String',
        require: true
    },
    age:{
        type:'Number',
        require: true
    },
    Village:{
        type:'String',
        require: true
    }

});

const HostelBoys = mongoose.model('hostelboys', Hostelboys);

module.exports = HostelBoys;