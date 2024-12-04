require("./xyz.js"); 
// to import the CalculateSum we have to import like this 
// const {x,CalculateSum} = require("./Calculate/sum.js");
// const { CalculateMultiply} = require("./Calculate/multiply.js")
const {CalculateMultiply,CalculateSum} = require("./Calculate");
// all the above code is in the form of Common Js Modules
//in ES Modules we import like this
// import {CalculateSum} from "./Calculate/sum.js"

const data = require("./data.json")
var name = "Anurag Pandey";
console.log(data);
var a =10;
var b = 20;
CalculateSum(a,b);
CalculateMultiply(a,b);
console.log(x);

console.log(globalThis===global);  


