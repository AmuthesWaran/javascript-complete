// Reserved Key word
let nickName = 'ammu'

console.log(nickName)
console.log();

let fName = 'Amutheswaran'
let lName = 'Arulkumar'

//concat using + operator
let fullName = fName + ' ' + lName
console.log('Fullname using + operator');
console.log(fullName);
console.log();

//concat using concat function
console.log('Fullname using concat function');
let fullName2 = fName.concat(' ', lName)
console.log(fullName2);
console.log();

//Challange 1

let city = 'Chennai'
let country = 'India'

let location = city.concat(', ', country)

console.log(location);