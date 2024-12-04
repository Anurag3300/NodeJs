const fs = require("fs");
const https = require("https");

var a  = 20;
var b = 30;

console.log("Hello World");
 
fs.readFileSync("./file.txt","utf8");
console.log("After the file read this code is executed")
https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("fetched Data Successfully");
});
setTimeout(()=>{
    console.log("setTimeout is called after 5sec");
},5000);
fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("File Data:",data);
});

function multiplyFn(x,y){
    const result = x*y;
    return result;
}

var c = multiplyFn(a,b);
console.log("multipication result is:",c);