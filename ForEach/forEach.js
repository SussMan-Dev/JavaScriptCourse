let a = [1, 2, 3, 4, 5];

console.log(a);

// forEach(callbackFn) runs the callback function once for each item in the array.
// The callback can receive 3 parameters:
// 1. value: the current item value
// 2. index: the current item index
// 3. array: the original array being looped
a.forEach((number, index) => {
    console.log(number + " at index: " + index);
});

// Example 1: Print each item
a.forEach((number) => {
    console.log("Value:", number);
});

// Example 2: Calculate the total
let total = 0;

a.forEach((number) => {
    total += number;
});

console.log("Total:", total);

// Example 3: Create new text from each item
let messages = [];

a.forEach((number, index) => {
    messages.push("Item " + number + " is at index " + index);
});

console.log(messages);

// Example 4: Work with an array of objects
let students = [
    { name: "An", score: 8 },
    { name: "Binh", score: 9 },
    { name: "Cuong", score: 7 }
];

students.forEach((student) => {
    console.log(student.name + " got " + student.score + " points");
});

// Example 5: Update objects inside an array
students.forEach((student) => {
    student.passed = student.score >= 5;
});

console.log(students);

// Notes:
// - forEach does not create a new array.
// - forEach returns undefined.
// - If you want to create a new array, use map().
// - If you want to filter items, use filter().
// - forEach is useful when you want to "do something" with each item:
//   console.log, calculate a total, render HTML, call a function, update data...
let result = a.forEach((number) => {
    return number * 2;
});

console.log("Return value of forEach:", result); // undefined

// Example 6: Render an array to HTML
// This is common when you have data and want to display each item on a web page.
let fruits = ["Apple", "Banana", "Orange", "Mango"];

let fruitList = document.createElement("ul");

fruits.forEach((fruit) => {
    let li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
});

document.body.appendChild(fruitList);

// Example 7: Count even and odd numbers
let evenCount = 0;
let oddCount = 0;

a.forEach((number) => {
    if (number % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
});

console.log("Even numbers count:", evenCount);
console.log("Odd numbers count:", oddCount);

// Example 8: Pass a separate function to forEach
function showNumber(number) {
    console.log("Processing number:", number);
}

a.forEach(showNumber);

// Quick comparison:
// forEach: used to loop through an array and perform an action.
// map: used to create a new array from an old array.
// filter: used to create a new array with items that match a condition.
//
// Example:
// a.forEach(...)  -> processes each item, but does not return a new array
// a.map(...)      -> returns a new array
// a.filter(...)   -> returns a new filtered array
