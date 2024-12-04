const crypto = require("crypto");

var a = 2000;
var b = 324567;

console.log("Hello World");
// this is sync funtion which actually block the main thread 
//Synchronus Funtion will block the main thread don't use it
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("first key is generated");


// pbkdf2 -password base key  Derivation Function 2
//when the code start execution js engine offloads to libuv and regester the callback;
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("Second key is generated");
});


function multipication(a,b){
    const result = a*b;
    return result;
}

var c = multipication(a,b);
console.log("Multipication of a and b:",c);

