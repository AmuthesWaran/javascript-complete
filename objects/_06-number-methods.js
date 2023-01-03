let num = 1365.978

console.log(num.toFixed(10));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 0
let max = 1
let randonNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randonNum);




// Challenge 13
// 1 - 5 
let makeGuess = function (guess) {
    let min = 1
    let max = 5

    let randonNum = Math.floor(Math.random() * (max - min + 1)) + min
    return guess === randonNum
}

console.log(makeGuess(1))


// Documentation

// MDN Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// MDN Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math