// map is used to create a new array from an old array
// number is the current value of the array
// index is the position of the current value
// array is the original array that map is being called on
// We can use array when the callback needs to know about the whole original array

//EXAMPLE
// const numbers = [10, 20, 30];

// const result = numbers.map((value,index,array)=>{
//     return value/ array.length
// })

// console.log(result);


let a = [1,2,3,4,5]
let b = a.map((number,index,array)=>{
    console.log(number);
    console.log(index);
    console.log(array);
    return number*2
})
console.log(b);
