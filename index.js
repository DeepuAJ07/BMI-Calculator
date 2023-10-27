let express = require("express")
let Route = require('./Route')

let cors = require('cors')
let app =express()
let dbconnection=require('./dbcollection')
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(cors())
app.use('/',Route)
app.listen(4500)