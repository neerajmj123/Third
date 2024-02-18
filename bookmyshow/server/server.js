const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
let dotenv= require('dotenv')
const exp = require('constants')
const mongoose= require('mongoose')
const { error } = require('console')
dotenv.config()
let port = process.env.PORT
app.use(express.static(__dirname+"/../client"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.text())

let schema = new mongoose.Schema({
    name:{
        type : String,
        required:true,
    },
    genre:{
        type :String,
        required:true,
    },
    director:{
        type :String,
        required:true,
    },
    image :{
        type:String,
        required :true
    }
})
const model = mongoose.model("Film",schema)
app.post('/submit',async(req,res)=>{
    let {name,genre,director,base64image}=req.body
    if(!name || !genre || !director || !base64image){
        return res.status(400).send("enter all fields")
    }
    const isUserExist = await model.findOne({name:name})
    if (isUserExist){
        return res.status(400).send('user already exist')
    }

    const uploadPhoto = path.join(__dirname,'uploads')
    if(!fs.existsSync(uploadPhoto)){
        fs.mkdirSync(uploadPhoto)
    }
    const imageBuffer = Buffer.from(base64image.replace(/^data:image\/\w+;base64,/,''),'base64')
    const fileExtention = base64image.split(';')[0].split('/')[1]
    const fileName = `${Date.now()}.${fileExtention}`
    const filePath = path.join(uploadPhoto,fileName)
    fs.writeFileSync(filePath,imageBuffer)

    try {
        await model.create({
            name:name,
            genre:genre,
            director:director,
            image:filePath
        })
        console.log("document inserted successfully")
        res.status(201).send("success")
    } catch (error) {
        console.error("Document insertion failed")
        res.status(400).send("failed to insert document")
        
    }
})
app.get('/getMovies',async(req,res)=>{
    const films = await model.find()
    res.status(200).send(films);
})



async function connect(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/list")
        console.log("Database connection established")
    } catch (error) {
        console.log("Database not connected")
    }finally{
        app.listen(port,()=>{
            console.log(`server running at http://localhost:${port}`)
        })
    }
}
connect()


