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

// console.log();
// for (let i = 0; i < todo0.length; i++) {
//     console.log((i+1) + '.', todo0[i]);

// }

const todos1 = [{
    todo: 'Wake Up',
    complete: true
}, {
    todo: 'Eat',
    complete: true
}, {
    todo: 'Learn',
    complete: true
}, {
    todo: 'Work',
    complete: false
}, {
    todo: 'Sleep',
    complete: false
}]


// const deleteTodo = function(todos, todoText){
//     const index = todos.findIndex(function (todo) {
//         return todo.todo.toLowerCase() === todoText.toLowerCase()
//     })
//     if(index > -1){
//         todos.splice(index, 1)
//     }
// }

// deleteTodo(todos1, 'Sleep')
// console.log(todos1)


// Filtering Array
const getThingsToDo = function (todos){
    return todos.filter(function (todo){
        return !todo.complete
    })
}


console.log(getThingsToDo(todos1))