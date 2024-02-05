const express = require('express')
const app = express()
const mongoose =require('mongoose')
let dotenv= require('dotenv')
const e = require('express')
const { error } = require('console')
dotenv.config()
let port = process.env.PORT

app.use(express.static(__dirname +"/../client"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

let schema = new mongoose.Schema({
    name :{
        type : String,
        required :true
    },
    email :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required :true
    }
})

const model = mongoose.model("users",schema)

app.post('/submit',async(req,res)=>{
    let datas = req.body;
    console.log("datas",datas)

    await model.create(datas)
    .then((message)=>{
        console.log("document inserted succesfully")
        res.status(200).send(sucess)
    })
    .catch((error)=>{
        console.log("document insertion failed")
        res.status(400).send("failed")
    })
})
app.get('/getData',async(req,res)=>{
    const users = await model.find();
    res.status(200).json(users)
})

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/newums')
        console.log("database concetion established")
    }catch(error){
        console.log("databse is not connected",error)
    }finally{
        app.listen(port,()=>{
            console.log(`server running at http://localhost:${port}`)
        })
    }
}
connect();