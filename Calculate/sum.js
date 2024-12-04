// By default Modules Protected their variable and function from leaking 

console.log("this Module is used to Calculate the Sum");
 x = 'Hello World';// in ES Modules are in strict mode so it is not working and give ReferenceError: x is not defined
// x = "hello World"(non-strict Mode when we used commonjs modules it is working fine)
// ES Modules we used the normal import and export  if we want to export the function and variable then we have
//to write export before the function and variable
// export function CalculateSum(a,b){s
//     const sum =a+b;
//     console.log(sum);
// }
function CalculateSum(a,b){
    const sum =a+b;
    console.log(sum);
}
// to use the funciton and variable(CalculateSum) into any other module we have to exprots the function and variable expicitly

module.exports = {x,CalculateSum}; // this is used in Common Js Module