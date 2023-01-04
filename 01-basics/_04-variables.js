//1. You cant define variable more than once

let hobby = 'origami'

// unable to redeclare variable with the same name 
// let hobby = 'coding'  

hobby = 'coding'

console.log(hobby);


//2.There are rules related to variable names
// Valid js variables name must start with a-z, A-Z, $ and _ are valid
// Using only $ and _ in variable name do not use anyother special characters
// don't use reserved keyword

let $name = 'ammu'
let _age = 23








//Challange 3 
// Temperature conversion

let fahrenheit = 45

let celsius = (fahrenheit - 32) * 5/9

console.log(celsius);

let kelvin = 5/9 * (fahrenheit + 459.67)

console.log(kelvin);


