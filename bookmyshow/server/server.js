const express = require('express')
const app = express()
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
})
const model = mongoose.model("Film",schema)
app.post('/submit',async(req,res)=>{
    let data = req.body
    console.log("data",data)
    const isfilmexist = await model.findOne({name: data.name})
    console.log("isfilmexist",isfilmexist) 
    if(isfilmexistfilmexist){
        res.status(400).send("Film already added")
        return
    }
    await model.create(data)
    .then((message)=>{
        console.log("Film Added Successfully")
        res.status(201).send("success")
    })
    .catch((error)=>{
        console.log("Film insertion failed")
        res.status(400).send("Failed")
    })
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


