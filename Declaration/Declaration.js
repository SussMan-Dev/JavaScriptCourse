// writer: Duc Huy - SussMan-Dev

// What is Let/Const/Var in JavaScript?
// 1. Var
// Var is the old way to declare variables in JavaScript. It has function scope, which means that it is accessible with in the function it is declared in. It can be re-declared and updated. However, it can lead to bugs and confusion due to its hoisting behavior and lack of block scope, which is why it is generally recommended to use let and const instead of var in modern JavaScript developement.
// 2. Let
// Let is a newer way to declare variables in JavaScript, introduced in ES6. It has block scope, which means that it is only accessible within the block it is declared in. It can be updated but not re-declared.
// 3. Const
// Const is another way to declare variables in JavaScript, introduced in ES6. It has block scope, which means that it is only accessible within the block it is declared in. It cannot be updated or re-declared after it is initialized.
// In summary, let and const are the recommended ways to declare variables in modern JavaScript development due to their block scope and improved readability, while var is generally discouraged due to its function scope and potential for bugs.
//Example of Hoisting
//========================================

// console.log(a);
// var a =5
// console.log(a);

//========================================
// output: undefined, why?
// Explain: JS engine have 2 phases (compilation and execute): at first, it finds all var declaration and put it in the top of the scope (if that variable didn't contain value => undefined), after that, It execute all the code one by one like another language
// that's why Var declaration usually caused bugs, so how about Let and const?
//========================================

// console.log(b);
// let b = 6 //output: DataType.js:16 Uncaught ReferenceError: Cannot access 'b' before initialization

//========================================
// Explain: let and const were introduced in ES6 to replace var.
// They use the Temporal Dead Zone (TDZ) to prevent access before initialization,
// avoiding the unintended behavior of var hoisting.

//========================================
// console.log(c);
// const c = 10
// console.log(c);
//========================================
//output: Uncaught ReferenceError: Cannot access 'c' before initialization at DataType.js:24:13


