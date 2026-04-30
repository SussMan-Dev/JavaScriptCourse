// In JavaScript, an array is a special type of object.
// It is used to store multiple values in an ordered list.
// Each value in an array has an index, and the index starts from 0.

let a = [1,2,3,4,5]
console.log(typeof(a)); //object
console.log(a[0]); //a[position]

for(let i =0;i<a.length;i++){
    console.log(a[i]);
}

//add more value into array
let b = [0,1,2,3,4,5]
b.push(6)
b.push(7)
console.log(b);
//remove the last element inside array
b.pop()
console.log(b);
//remove the first element  inside array
b.shift()
console.log(b);
// remove by index
b.splice(2,1) //(start at index 2 and delete 1 element)
console.log(b);

