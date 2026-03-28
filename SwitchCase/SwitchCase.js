// Switch case is similar to if...else, but it compares the given value
// with each case value. If they are equal, that case will be executed.
let a = 7;

switch (a) {
    case 5:
        console.log("a is 5");
        break;
    case 10:
        console.log("a is 10");
        break;
    default:
        console.log(`a is not 5 or 10, a is ${a}`);
        break;
}
