// ============================================== FUNCTION =============================================
// A function is a reusable block of code.
// We use a function to do a task, avoid repeating code,
// and split a big problem into smaller parts.

// In basic JavaScript, people often talk about 2 main kinds of functions:
// 1. Function Declaration
// 2. Function Expression
//
// Arrow Function is also very common.
// It is a shorter form of Function Expression.

// ======================================== 1) FUNCTION DECLARATION ========================================
// Syntax:
// function functionName(parameters) {
//     // code
// }
//
// Key point:
// Function Declarations are hoisted.
// That means you can call them before the function is written in the file.

sayHelloDeclaration("Anna");

function sayHelloDeclaration(name) {
    console.log(`Hello, ${name}`);
}

// ========================================= 2) FUNCTION EXPRESSION ========================================
// Syntax:
// const functionName = function(parameters) {
//     // code
// };
//
// Key point:
// Function Expressions are not ready to use before the assignment line.
// If you call them too early, JavaScript will throw an error.

const sayHelloExpression = function(name) {
    console.log(`Hi, ${name}`);
};

sayHelloExpression("Brian");

// Wrong example:
// sayHelloExpression("Brian"); // Error if called before the function is assigned

// ============================================ 3) ARROW FUNCTION ============================================
// Syntax:
// const functionName = (parameters) => {
//     // code
// };
//
// Arrow Function is a shorter way to write a Function Expression.
// It is often used for short functions.

const sayHelloArrow = (name) => {
    console.log(`Hey, ${name}`);
};

sayHelloArrow("Cindy");

// Shorter arrow function:
const add = (a, b) => a + b;
console.log(add(3, 5)); // 8

// =============================================== COMPARISON ===============================================
// Function Declaration:
// - Has a name
// - Hoisted
// - Can be called before it is declared
//
// Function Expression:
// - Stored in a variable
// - Not fully usable before assignment
// - Good when you want to treat a function like a value
//
// Arrow Function:
// - A short form of Function Expression
// - Does not have its own "this"
// - Common in modern JavaScript

// ============================================== SIMPLE SUMMARY =============================================
// Easy rule to remember:
// - Declaration = normal function, can call first
// - Expression = function stored in a variable, call after assignment
// - Arrow = short expression style

// =============================================== EXTRA NOTE ================================================
// "this" in arrow functions is different from normal functions.
// Normal functions have their own "this".
// Arrow functions use "this" from the outer scope.

const student = {
    name: "David",
    normalFunction: function() {
        console.log(`Normal function: ${this.name}`);
    },
    arrowFunction: () => {
        console.log(`Arrow function: ${this.name}`);
    }
};

student.normalFunction(); // David
student.arrowFunction(); // usually undefined in this case