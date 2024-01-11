const http = require('http');
const url = require('url')
const fs = require('fs')
const queryString = require('querystring')
const { MongoClient, ObjectId } = require('mongodb');
const { error } = require('console');
const hostname = '127.0.0.1';
const port = 4050;

const client = new MongoClient("mongodb://127.0.0.1:27017")
const server = http.createServer(async (req, res) => {

  const db = client.db("tasks")
  const collection = db.collection("task_list")

  console.log("url : ", req.url);
  const parsed_url = url.parse(req.url)
  console.log("parsed_url :", parsed_url);
  
  if(parsed_url.pathname === '/'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end(fs.readFileSync('../client/index.html'));
  }else if (parsed_url.pathname === '/style.css') {
    res.writeHead(200, { 'Content-Type': "text/css"})
    res.end(fs.readFileSync("../client/style.css"))
  }
  if (req.method === "POST" && parsed_url.pathname === "/submit") {
    console.log("Form Submitted Sucessfully")
    let body = '';
    req.on('data', (chunk) => {
      console.log("chunk : ", chunk);
      console.log('chunk.toSring() : ', chunk.toString())
      body += chunk.toString();
      console.log("body :", body)
  })
  req.on('end', async () => {
    const formData = queryString.parse(body)
    console.log("formData :", formData)

    console.log("name",formData.tasks)

    collection.insertOne(formData)
    .then((message)=>{
      console.log("document saved succesfully")
      console.log("message",message)
    })
    .catch((error)=>{
      console.log("document not inserted ")
      console.log("databse insertion error",error)
    })
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.end("task addded  succesfully")
  })
}
if (req.method === "GET" && parsed_url.pathname === "/getData") {
  let data = await collection.find().toArray();
  console.log("data :", data)
  let json_data = JSON.stringify(data)
  console.log("json_data", json_data)

  res.writeHead(200, { "Content_Type": "text/json" })
  res.end(json_data)
}  

});
async function connect() {
  await client.connect()
      .then((message) => {
          console.log("Database connection established")
      })
      .catch((error) => {
          console.log("Database connection error ", error)
      })
      .finally(() => {
          server.listen(port, () => {
              console.log(`Server running at http://localhost:${port}/`);
          });
      })
}
connect();
