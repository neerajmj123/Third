const http = require('http');
const url = require('url');
const fs = require('fs');
const queryString = require('querystring');
const { MongoClient } = require('mongodb');
const { error } = require('console');
let hostname = '127.0.0.1';
const port = 3000;

const client = new MongoClient("mongodb://127.0.0.1:27017")
const server = http.createServer((req,res) => {

    const db = client.db("users")
    const collection = db.collection("users_coll")

    console.log("url : ",req.url);
    const parsed_url = url.parse(req.url)
    console.log("parsed_url :",parsed_url);
    
    if(parsed_url.pathname ==='/'){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.end(fs.readFileSync('../client/inex.html'))
    }else if (parsed_url.pathname === '/style.css'){
    res.writeHead(200,{'Content-Type' : "text/css"})
    res.end(fs.readFileSync("../client/style.css"))
    }

    if(req.method === "POST" && parsed_url.pathname === "/submit"){
        console.log("Form Submitted Sucessfully")
        let body = '';

        req.on('data',(chunk)=> {
            console.log("chunk : ",chunk);
            console.log('chunk.toSring() : ',chunk.toString())
            body+=chunk.toString();
            console.log("body :",body)
        })
        req.on('end',async ()=> {
            const formData = queryString.parse(body)
            console.log("formData :",formData)

            console.log("name :",formData.name)
            console.log("email ",formData.email)
            console.log("password",formData.password)

            collection.insertOne(formData)
            .then((message) => {
                console.log("document saved succesfully")
                console.log("message", message)
            })
            .catch((error) => {
                console.log("document not inserted ")
                console.log("database insertion error", error)
            })
            res.writeHead(200,{'Content-Type':"text/plain"})
            res.end("form submitted sucessfully")
        })
        
    }
});
async function connect(){
 await client.connect()
 .then((message)=>{
    console.log("database connection established")
 })
 .catch((error)=>{
    console.log("database connection error ",error)
 })
 .finally(()=>{
    server.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`);
      });
 })
}
connect();
