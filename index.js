const path = require('path');
const cors = require('cors');
const express=require("express");
const server=express();
const mongoose = require('mongoose');

const productRouter=require('./routes/product');
const userRouter = require('./routes/user')
require('dotenv').config();

server.use(cors());
server.use(express.json());
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
console.log(process.env.DB_PASSWORD)


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected');
}

// console.log("dbpa",process.env.DB_PASSWORD)
// suvu@3232--suvenduEcommorce
// server.get("/products",productController.getProduct)
// server.get("/products/:id",productController.getProductById)
// server.post("/products",productController.createProduct)
// server.put("/products/:id",productController.updateProduct)
// server.patch("/products/:id",productController.replaceProduct)
// server.delete("/products/:id",productController.deleteProduct)

// server
// .get("/products",productController.getProduct)
// .get("/products/:id",productController.getProductById)
// .post("/products",productController.createProduct)
// .put("/products/:id",productController.updateProduct)
// .patch("/products/:id",productController.replaceProduct)
// .delete("/products/:id",productController.deleteProduct)


server.listen(8677,()=>{
    console.log("Get Startedd")
})