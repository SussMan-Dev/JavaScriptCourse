const sv1 = {name: "bui duc huy", age : 18}
const sv2 = {name: "nguyen van an", age:16}
const danhsach = [sv1,sv2]

// for...in is used when you want to read the keys of an object.
// After getting the key, you can use object[key] to get the value.
// So for...in is useful when you need both key + value from an object.
for (let key in sv1) {
    console.log("for...in object:", key, sv1[key]);
}

// for...in can also loop through array indexes,
// but it is not the best choice when you only need array values.
for (let index in danhsach) {
    console.log("for...in array index:", index, danhsach[index]);
}

// for...of is used when you only need values from an iterable.
// Iterable values are values that can be counted/read one by one.
// Common iterables: array, string, Map, Set.
for (let student of danhsach) {
    console.log("for...of array value:", student);
}

for (let char of "JavaScript") {
    console.log("for...of string value:", char);
}

// Quick rule:
// Use for...in when you want object keys, or key + value from an object.
// Use for...of when you only want values from iterable data, especially arrays and strings.
