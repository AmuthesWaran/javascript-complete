let username = ' Amuthe '
let password = 'password123'

// Length property
console.log(username.length)

// Convert to uppercase
console.log(username.toUpperCase())

// Convert to lowercase
console.log(username.toLowerCase())

// Includes method
console.log(password.includes('password'))

// Trim Method
console.log(username.trim())

// Documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


// Challenge 12


let isValidPassword = function (password) {
    
    // if (password.length > 8 && !password.includes('password')){
    //     return true
    // }
    // else{
    //     return false
    // }
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdfg'))
console.log(isValidPassword('abc123*&Uff'))
console.log(isValidPassword('aghfjdpassword'));