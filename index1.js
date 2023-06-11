const http=require("http");
const fs=require("fs");

const index=fs.readFileSync('index.html','utf-8'); //2
const dataJson=fs.readFileSync('data.json','utf-8'); //3
const data={age:5}   //1
const server=http.createServer((req,res)=>{
   
    console.log(req.url)
    console.log("server started");
    // res.end("hello")
    res.setHeader("Dummy","DummyValue");
    // res.setHeader("Content-Type","application/json"); //1,3 
    res.setHeader("Content-Type","text/html"); //2
    res.end(index)
})

server.listen(8080)