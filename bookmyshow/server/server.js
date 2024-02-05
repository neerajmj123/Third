const express = require('express')
const app = express()
let dotenv= require('dotenv')
const exp = require('constants')
dotenv.config()
let port = process.env.PORT
app.use(express.static(__dirname+"/../client"))









app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})