const express = require('express')
const app = express()
const mongoose =require('mongoose')
const fs = require('fs')
const path = require('path')
let dotenv= require('dotenv')
const e = require('express')
const { error } = require('console')
const { extname } = require('path')
const { buffer } = require('stream/consumers')

dotenv.config()
let port = process.env.PORT

app.use(express.static(__dirname +"/../client"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.text())



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
    },
    image :{
        type:String,
        required :true
    }
    
})

const model = mongoose.model("users",schema)

app.post('/submit',async(req,res)=>{
    let {name,email,password,base64image}=req.body
    if(!name || !email || !password || !base64image){
        return res.status(400).send("enter all fields")
    }
    const isUserExist = await model.findOne({email:email})
    if (isUserExist){
        return res.status(400).send('user already exist')
    }
    const uploadPhoto = path.join(__dirname,'uploads')
    if(!fs.existsSync(uploadPhoto)){
        fs.mkdirSync(uploadPhoto)
    }
    const imageBuffer = Buffer.from(base64image,'base64')
    const fileName = `${Date.now()}.png`
    const filePath = path.join(uploadPhoto,fileName)
    fs.writeFileSync(filePath,imageBuffer)

    try {
        await model.create({
            name:name,
            email:email,
            password:password,
            image:filePath
        })
        console.log("document inserted successfully")
        res.status(201).send("success")
    } catch (error) {
        console.error("Document insertion failed")
        res.status(400).send("failed to insert document")
        
    }
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