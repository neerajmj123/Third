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
  }else if (parsed_url.pathname === '/script.js') {
    res.writeHead(200, { 'Content-Type': "text/javascript"})
    res.end(fs.readFileSync("../client/script.js"))
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
  if (req.method === "PUT" && parsed_url.pathname === "/editData") {
    let body = ""
    req.on('data', (chunk) => {
      console.log("chunks", chunk)
      body = body + chunk.toString()
      console.log("body", body)
    })
    req.on('end', async () => {
      console.log("body", body)
      let data = JSON.parse(body)
      let id = data.id
      console.log("id", id)
      let _id = new ObjectId(id)
      console.log("_id", _id)

      let updateTask = {
        tasks: data.tasks,
      }
      await collection.updateOne({ _id }, { $set: updateTask })
        .then((message) => {
          console.log("Document Updated succesfully", message)
          res.writeHead(200, { "Content-Type": "text/plain" })
          res.end("Updated successfully")
        })
        .catch((error) => {
          console.log("Document not updated", error)
          res.writeHead(200, { "Content-Type": "text/plain" })
          res.end("Updation failed")
        })
    })
  }
if(req.method === "DELETE" && parsed_url.pathname === "/deleteData"){
  console.log("Reached delete route")

  let body =""
  req.on('data',(chunk)=>{
      console.log("chunk",chunk)
      body=body+chunk.toString()
      console.log("body",body)
  })
  req.on('end',async()=>{
      let _id=new ObjectId(body)
      await collection.deleteOne({_id})
      .then((message)=>{
          console.log("Deletion Successful")
          res.writeHead(200,{"Content-Type" :"text/plain"})
          res.end("Success")
      })
      .catch((error)=>{
          console.log("Deletion Failed")
          res.writeHead(200,{"Content-Type":"text/plain"})
          res.end("Failed")
      })
  })

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
