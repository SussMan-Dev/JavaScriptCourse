// if the condition inside () of the if or else if is true, it will execute the statement inside its
let outOfMoney = true
if(outOfMoney === true){
    // the condition is correct, so the statement below will be execute
    console.log("I'm staving");
}
else{
    console.log("I'm not starving");
}
// let try with object type
const your_friend = {
    name: "GeiLordFater",
    isGay: true // we will check out this attribute to know exactly who is he
}
if(your_friend.isGay === true){
    console.log(`Your friend ${your_friend.name} is a gay`);
}
else if(your_friend.isGay === false){
    console.log(`Your friend ${your_friend.name} is not gay`);
}
else{
    console.log("your friend wasn't researched to knew his gender !!!");
}
// note: == is compare the values, === is compare the values and the datatypes