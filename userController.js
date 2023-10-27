const mongoose = require('mongoose')
let Schema=require('./userSchema')

let Register = (req,res)=>{
    let newData = new Schema({
Name:req.body.Name,
Age:req.body.Age,
Email:req.body.Email,
Password:req.body.Password,
ConfirmPassword:req.body.ConfirmPassword
    })

    newData.save().then((Data)=>{
if(Data.Password===Data.ConfirmPassword){
    res.json({
        Status:200,
        Data:Data,
        msg:'Registered'
    })
   
}else{
    res.json({
        Status:500,
        Data:null,
        msg:'Password Mismatch'
    })
}
    }).catch((Error)=>{
        res.send(Error)
    })
}

const Login = (req,res)=>{
Schema.findOne({Email:req.body.Email}).exec().then((Login)=>{
    console.log(Login);
    if(Login){
        if(Login.Password===req.body.Password){
            res.json({
                Status:200,
                msg:'Login Sucessful',
                Data:Login
            })
            
        }else{
            res.json({
                Status:400,
                msg:'Incorrect Password'
            })
        }
    }else{
        res.json({
            Status:500,
            msg:'Data not Exists'
        })
    }
})
}

module.exports={Register,Login}