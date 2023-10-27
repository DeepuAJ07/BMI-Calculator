let mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    C_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    Height:{
        type:Number
    },
    Weight:{
        type:Number
    },
    BMI:{
      type:Number  
    },
    Date:{
        type:Date
    }
})

let model = mongoose.model('Calculator',Schema)

module.exports=model