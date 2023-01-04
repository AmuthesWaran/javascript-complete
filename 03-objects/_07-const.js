const isRaining = true

//Redeclaration not permited using const variable
// isRaining = false

console.log(isRaining)

const person = {
    age: 23
}

// person = {}  - not permitted

person.age = person.age + 1 // allowed

console.log(person);