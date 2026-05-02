// object is a data type used to store related data
// unlike array, object does not use index to access data
// object uses key-value pairs

let person = {
  name: "bui duc huy",
  age: 18
};

// name and age are keys
// "bui duc huy" and 18 are values

// 2 ways to get value from object
console.log(person.name);      // dot notation //popular
console.log(person["age"]);    // bracket notation //use when key is located in a variable

// update value
person.age = 19;
console.log(person.age);

// add new key-value pair
person.address = "Vietnam";
console.log(person);

// delete a key-value pair
delete person.address;
console.log(person);
