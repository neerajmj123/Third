const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const fs = require('fs')
const { error } = require('console')
const { json } = require('stream/consumers')
dotenv.config()
let port = process.env.PORT

app.use(express.static(__dirname + "/../client"))
app.use(express.json());

app.post('/submit',(req,res)=>{
    const body = req.body
    console.log("body",body)

    const folderPath = './datas'
    const filename = 'datas.json'
    const filePath = path.join(folderPath,filename)

    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath,{recursive:true})
    }
    let fileContent = fs.readFileSync(filePath,"utf-8")
    console.log("fileContent",fileContent)

    let dataArr = []
    if (fileContent === ""){
        dataArr.push(body)
        let json_data = JSON.stringify(dataArr)
        fs.writeFile(filePath,json_data,(err)=>{
            if(err){
                res.status(400).send("failed")
            }else{[{"name":"john","email":"john12@gmail.com","password":"1234569"}]}
                res.status(201).send("success")
                
        })
    }else{
        let parsedFileContent = JSON.parse(fileContent)
        parsedFileContent.push(body)
        let json_data = JSON.stringify(parsedFileContent)
        fs.writeFile(filePath,json_data,(err)=>{
            if(err){
                res.status(400).send("failed")
            }else{
                res.status(201).send("success")
            }
        })
    }
})
app.get('/getData',(req,res)=>{
    const folderPath = './datas'
    const filename = 'datas.json'
    const filePath = path.join(folderPath,filename)
    if(!fs.existsSync(filePath)){
        res.status(400).send('Data Not Found')
    }else{
        const fileContent = fs.readFileSync(filePath,"utf-8")
        const dataArr = JSON.parse(fileContent)
        res.status(200).send(dataArr)
    }
})
app.put("/editData",(req,res)=>{
    const folderPath = './datas'
    const filename ='datas.json'
    const filePath = path.join(folderPath,filename)
    if(!fs.existsSync(filePath)){
        res.status(400).send('Data Not Found')
    }else{
        const fileContent = fs.readFileSync(filePath,"utf-8")
        let json_data = JSON.parse(fileContent)
        
        
    }
    fs.writeFile(filePath,json_data,(err)=>{
        if(err){
            res.status(400).send("failed")
        }else{
            res.status(201).send("Data updated sucessfully")
        }
    })
    
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
    });