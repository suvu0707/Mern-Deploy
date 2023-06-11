const fs = require('fs');

const express=require("express");
const path = require('path');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const products = data.products;


const server=express();
server.use(express.json());

// CRUD

//Create POST /products
server.post("/products",(req,res)=>{
    // console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body)
});

//READ GET /products
server.get("/products",(req,res)=>{
    res.json(products)
});

server.get("/products/:id",(req,res)=>{
    const id=+req.params.id;
   const product= products.find(p=>p.id===id)
    res.json(product)
});


//Update PUT /products
server.put("/products/:id",(req,res)=>{
    const id=+req.params.id;
   const productIndex= products.findIndex(p=>p.id===id);
   products.splice(productIndex,1,{...req.body,id:id})

    res.status(201).json()
});

//Delete DELETE /products/:id
server.delete("/products/:id",(req,res)=>{
    const id=+req.params.id;
    const productIndex= products.findIndex(p=>p.id===id);
    const product=products[productIndex]
    products.splice(productIndex,1)
 
     res.status(201).json(product)
})

//Update PATCH /products
server.patch("/products/:id",(req,res)=>{
    const id=+req.params.id;
   const productIndex= products.findIndex(p=>p.id===id);
   const product=products[productIndex]
   products.splice(productIndex,1,{...product,...req.body})

    res.status(201).json()
});





server.get("/demo",(req,res)=>{
    // res.send("Hello World");
    // res.send("<h1>Hello World</h1>");
    // res.sendFile("index.html"); //Need a absolute path to run
    // res.sendFile(path.join(__dirname, 'index.html')); 
    // res.json(products);
    // res.sendStatus(400);
    
  // res.status(201).send('<h1>hello</h1>')
})

server.listen(8678,()=>{
    console.log("Get Startedd")
})