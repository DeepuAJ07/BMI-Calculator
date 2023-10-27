let express=require('express')
let route = express.Router()
let Login =require('./User/userController')
let Calculator=require('./Calculators/Calculator/CalculatorController')
let userDetails=require('./Calculators/Calculator/UserDetails')
const { Schema } = require("mongoose");
route.post('/Register',Login.Register)
route.post('/Login',Login.Login)
route.post('/Calculate/:C_id',Calculator.Calculate)
route.post('/userData/:C_id',userDetails.userDetails)
module.exports=route