// const lib=require("./lib.js"); //modules that we created
const fs=require("fs");  //bydefault fileSystem module that node provides

console.log(2,4);
console.log("1",performance.now()); // It will show time when each func called
// const txt=fs.readFileSync('demo1.txt','utf-8');  //It reads text file syncronously and took more time
fs.readFile('demo1.txt','utf-8',(err,txt)=>{console.log("txt",txt)});  //It reads text file assyncronously and took less time
console.log("2",performance.now())
// console.log("txt",txt)