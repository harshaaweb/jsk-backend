const mongoose = require('mongoose');
const user= mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image:{
        type:String
    },
    phone:{
        type:Number,
        
    },
    address:{
        type:String,
       
    },
    status:{
        type:String,
        required:true
    },
}, { timestamps: true });

module.exports = mongoose.model('user', user);