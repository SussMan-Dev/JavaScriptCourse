// filter is a function used to create a new array based on a condition

const numbers = [1, 2, 3, 4, 5];

const oddNumbers = numbers.filter((number) => {
  return number % 2 === 1;
});

console.log(oddNumbers); // [1, 3, 5]

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]
