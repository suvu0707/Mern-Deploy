const path = require('path');
const express=require("express");
const server=express();
const productRouter=require('./routes/product');
const userRouter = require('./routes/user')


server.use(express.json());
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);

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