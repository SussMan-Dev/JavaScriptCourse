const sv1 = {name: "bui duc huy", age : 18}
const sv2 = {name: "nguyen van an", age:16}
const danhsach = [sv1,sv2]

// for...in is used when you need keys/properties of an object.
// It can also loop through array indexes, but it is not the best choice for arrays.
for (let key in sv1) {
    console.log("for...in object:", key, sv1[key]);
}

for (let index in danhsach) {
    console.log("for...in array index:", index, danhsach[index]);
}

// for...of is used when you need values from an iterable.
// Common iterables: array, string, Map, Set.
for (let student of danhsach) {
    console.log("for...of array value:", student);
}

for (let char of "JavaScript") {
    console.log("for...of string value:", char);
}

// Quick rule:
// Use for...in for object keys/properties.
// Use for...of for iterable values, especially arrays and strings.

