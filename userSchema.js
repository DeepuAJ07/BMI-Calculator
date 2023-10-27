let mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    Name:{
        type:String,
       
    },
    Age:{
        type:Number,
        },
        Email:{
            type:String,
            unique:true,
require:true,
dropDups:true
        },
        Password:{
            type:String,
            unique:true,
require:true,
dropDups:true 
        },
        ConfirmPassword:{
            type:String,
            require:true,
            dropDups:true
        }
})

var model = mongoose.model('Users',Schema)
module.exports=model