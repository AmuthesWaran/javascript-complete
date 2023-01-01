// Function - Input (arguments), Code, Output (return value)

let greetUser = function() {
    console.log('Hello There');
}

greetUser()
// greetUser()
// greetUser()

// let squareNum = function (num) {
//     console.log(num * num);    
// }

let squareNum = function (num) {
    return num * num;    
}

let value = squareNum(3)
console.log(value);
let value2 = squareNum(4)
console.log(value2);


// Challenge 7
// Convert Fahrenheit to Celsius 

let FtoC = function(f){
    return (f - 32) * 5/9
}

let value3 = FtoC(32)
let value4 = FtoC(68)

console.log(value3);
console.log(value4);






