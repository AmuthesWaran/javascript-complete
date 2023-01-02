let myBook = {
    title: 'How to learn',
    author: 'ammu',
    pageCount: 92
}

console.log(myBook)

//Accessing properties from the object
console.log(myBook.title)

console.log(`${myBook.title} by ${myBook.author}`)

// add or replace properties from an objects
myBook.title = 'How to learn programming'
console.log(`${myBook.title} by ${myBook.author}`)



// Challenge 10

let student = {
    name: 'Amuthe',
    age: 22,
    location: 'Chennai'
}


console.log(`${student.name} is ${student.age} years old and live in ${student.location}`)

student.age = student.age + 1

console.log(`${student.name} is ${student.age} years old and live in ${student.location}`)
