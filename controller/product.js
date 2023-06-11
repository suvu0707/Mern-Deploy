const fs = require('fs');


const model=require('../Model/product');
const Product=model.Product

exports.createProduct = (req, res) => {
 const product=new Product(req.body);
//  product.title="PhoneU";
//  product.price=999;
//  product.rating=4;
 product.save((err,doc)=>{
   if(err){
    res.status(201).json(err);
   }else{
    res.status(201).json(doc);
   }

 });
};

exports.getAllProducts = async(req, res) => {
  const products=await Product.find()
  res.json(products);
};

exports.getProduct = async(req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.json(product);
};
exports.replaceProduct = async(req, res) => {           //PUT Request
    const id = req.params.id;
    try{
    const doc = await Product.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
};
exports.updateProduct = async(req, res) => {
    const id = req.params.id;
  try{
  const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
exports.deleteProduct = async(req, res) => {
    const id = req.params.id;
    try{
    const doc = await Product.findOneAndDelete({_id:id})
    res.status(201).json(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
};
