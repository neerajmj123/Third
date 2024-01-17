const express = require('express')
const app = express()
let { MongoClient,ObjectId } =require('mongodb')
let dotenv = require('dotenv');
const { MongoClient, ObjectId } = require('mongodb');
dotenv.config();
let port = process.env.PORT

const client = new MongoClient('mongodb://localhost:27017')
const db = client.db('ums');
const collection = db.collection('users')

app.get('/test',(req,res,next)=>{
    // res.status(200).send("sucess")
    next();
},(req,res,next0)=>{
    // console.log("sucess2")
    // res.status(200).send("sucess2")
    next()
},(req,res,next)=>{
    console.log("sucess3")
    res.status(200).send("sucess3")
})
console.log("__dirname ",__dirname)
app.use('/',express.static(__dirname+"/client"))
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.post('/submit',async(req,res)=>{
    let data = req.body;
    console.log("data", data);

    await collection.insertOne(data)
    .then((message)=>{
        console.log("document inserted sucessfully")
        res.status(201).send('success')
    })
    .catch((error)=>{
        console.log("document insertion failed")
        res.status(400).send('failed')
    })
})
app.get('/getData',async (req,res)=>{
    let data = await collection.find().toArray();
    console.log("data",data)

    let json_data = JSON.stringify(data)
    console.log("json_data",json_data)
})
app.put('/editData',async(req,res)=>{
    let data = req.body
    console.log("data",data)

    let id = data.id
    console.log("id",id)
    console.log("typeof(id)",typeof(id))
    let _id = new ObjectId(id)
    console.log("_id",_id)
    console.log("typeof(_id)",typeof(_id))

    let updateDatas ={
        name : data.name,
        email : data.email,
        password : data.password,
    }

    await collection.updateOne{{_id},{$set
    }}
})






