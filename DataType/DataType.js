// Javascript have 7 primitive types: number, string, boolean, null, undefined, bigint, symbol and anything else is Object type
//========================================NUMBER========================================
// number is a data type used to represent integers and floating-point numbers
// this data type is commonly used to store values such as age, price, height, or calculation results

console.log("DataType Number");
let a = 123
console.log(typeof(a)); // output: number

//========================================STRING========================================
// string is a data type used to represent text
// this data type is commonly used to store values such as names, messages, or addresses

// console.log("DataType String");
// let b ="hehe"
// console.log(typeof(b)); // output: string

//========================================BOOLEAN========================================
// boolean is a data type used to represent two values: true or false
// this data type is commonly used for variables such as isFemale, isLoggedIn, or isActive

// console.log("DataType Boolean");
// let c =false
// console.log(typeof(c)); // output: boolean

// Note: when you compare a boolean value with 1 or 0 using ==, JavaScript performs type coercion
// true becomes 1 and false becomes 0 during the comparison

// if (c == 1) {
//     console.log(true);
// }
// if (c == 0) {
//     console.log(false);
// }

// To avoid confusion, use === because it compares both value and data type

// if(c === 1){
//     console.log(true);
// }
// if(c === 0){
//     console.log(false);
// }

//========================================OBJECT========================================
// object is a data type used to store multiple values in a structured way
// JavaScript has many types of objects, such as arrays, functions, and regular objects
// for example, an array is a special kind of object, so typeof returns "object"
// let d = ["hello", "world"]
// console.log(typeof(d)); // output: object
// console.log(d[0]);
// you can access the values inside an array by their position, such as d[0]
// array positions start at 0

//each property has a name and a value, and you can access them using dot notation or bracket notation
// let e = {
//     name:"huy",
//     age:"19"
// }
// console.log(typeof(e)); // output: object
// console.log(e.age);

// In javascript, null has been considered as an object type, so this is a bug that appear at JavaScript 1995
// null was represented as a null pointer (`0x00`), and the system interpreted it as having the same type tag as an object

// let g = null
// console.log(typeof(g)); // object

//========================================OBJECT========================================
let f
console.log(typeof(f)); // undefined

let h = 123n
console.log(typeof(h)); // bigint

let i = Symbol("id")
console.log(typeof(i)); // symbol

let j = function() {}
console.log(typeof(j)); // function

