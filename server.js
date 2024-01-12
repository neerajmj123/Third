const express = require('express')
const app = express()
let dotenv = require('dotenv')
dotenv.config();
let port = process.env.PORT

app.get('/test',(req,res)=>{
    res.status(200).send("sucess")
})
app.listen(port,()=>{
    console.log(`sever started at http://localhost:${port}`)
})