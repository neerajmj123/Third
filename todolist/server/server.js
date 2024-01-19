const express = require('express')
const app = express()
let { MongoClient,ObjectId}= require('mongodb')
let dotenv = require('dotenv')
const exp = require('constants')
const { error } = require('console')
const e = require('express')
dotenv.config()
let port = process.env.PORT

const client = new MongoClient('mongodb://localhost:27017')
const db = client.db('tasks')
const collection = db.collection('task_list')

console.log("__dirname",__dirname)
app.use('/',express.static(__dirname+"/../client"))
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.post('/submit',async(req,res)=>{
    let data = req.body;
    console.log("data", data);

    await collection.insertOne(data)
    .then((message)=>{
        console.log("document inserted sucessfully")
        res.status(201).send('Task Added')
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
    res.status(200).send(json_data)
})
app.delete('/deleteData',async(req,res)=>{
    console.log("Reached delete route")
    let data = req.body
    console.log("data",data)


    let id= data.id
    console.log("id",id)
    let _id = new ObjectId(id)
    await collection.deleteOne({id})
    .then((message)=>{
        console.log("deletion successful",message)
        res.status(200).send('Success')
    })
    .catch((error)=>{
        console.log("Deletion failed",error)
        res.status(401).send('Failed')
    })
})
app.put('/editData',async(req,res)=>{
    let data = req.body
    console.log("data",data)

    let id= data.id
    console.log("id",id)
    let _id = new ObjectId(id)
    console.log("_id",_id)

    let updateDatas ={
        tasks : data.tasks,
    }
    await collection.updateOne({_id},{$set : updateDatas})
    .then((message)=>{
        console.log("document updated sucessfully",message)
        res.status(200).send('success')
    })
    .catch((error)=>{
        console.log("document updation failed",error)
        res.status(400).send('failed')
    })
})



async function connect() {
    await client.connect()
        .then((message) => {
            console.log("Database connection established")
        })
        .catch((error) => {
            console.log("Database connection error ", error)
        })
        .finally(() => {
            app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/`);
            });
        })
}
connect();
