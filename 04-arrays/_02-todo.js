const todo = ['Wake up', 'Eat', 'Learn', 'Work', 'Sleep']

console.log(`I have ${todo.length} todos`)

// Accessing 1st element in todo array
console.log(`Todo: ${todo[0]}`)

// Accessing last 2nd element in todo array
console.log(`Todo: ${todo[todo.length - 2]}`)


// Challenge 14


console.log(todo.splice(3, 1))

console.log(todo)

todo.push('Apply Leave')

console.log(todo)


const todo0 = ['Wake up', 'Eat', 'Learn', 'Work', 'Sleep']

todo0.forEach((todo, index) => {
    console.log((index + 1) + '.', todo);
});
