const http = require('http');
const url = require('url')
const fs = require('fs')
const queryString = require('querystring')
const { MongoClient, ObjectId } = require('mongodb');
const { error } = require('console');
const hostname = '127.0.0.1';
const port = 4050;

const client = new MongoClient("mongodb://127.0.0.1:27017")
const server = http.createServer((req, res) => {

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
  })
}
  

});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});