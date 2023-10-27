let Schema = require('./CalculatorSchema')

const userDetails = (req,res)=>{
    Schema.find({C_id:req.params.C_id}).populate('C_id').exec().then((userData)=>{
        res.json({
            Status:200,
            Data:userData
        })
    }).catch((err)=>{
        res.send(err)
    })


}

module.exports={userDetails}