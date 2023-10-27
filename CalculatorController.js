 let Schema = require("./CalculatorSchema")

 let Calculate = (req,res)=>{
    let newData=new Schema({
        C_id:req.params.C_id,
        Height:req.body.Height,
        Weight:req.body.Weight,
        BMI:req.body.BMI,
        Date:req.body.Date})
    

    newData.save().then((Calc)=>{
        res.json({
            Status:200,
            msg:'Result',
            Data:Calc
        })
    }).catch((Error)=>{
        res.send(Error)
    })
}

    module.exports={Calculate}