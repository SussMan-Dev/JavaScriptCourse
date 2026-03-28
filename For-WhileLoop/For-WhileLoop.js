//========================================FOR LOOP========================================
// Use a for loop when you know how many times you want to loop.
// Structure: for (start; condition; step)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// I changed the step, so we get a list of even numbers.
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
//========================================WHILE LOOP========================================
// A while loop is useful when you do not know exactly
// how many times the loop will run.
let listNum = [1,2,3,4,5,6,7]
let index = 0
while(true){
    if(listNum[index] == 5){
        console.log(`5 is in index ${index} of listNum`);
        break
    }
    index++
}

// break stops the loop, and continue skips the current iteration
for(let i = 0; i< 5;i++){
    console.log(i);
    if(i==2){
        console.log("2 is here" + i);
        break
    }
}
for(let i = 0; i< 5;i++){
    if(i %2 == 0){
        continue
    }
    else{
        console.log(i);
    }    
}