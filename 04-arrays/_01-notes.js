// Documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


const notes = ['Note 0', 'Note 1', 'Note 2']


console.log(notes)

// Adding an element to an array
notes.push('Note 3')

console.log(notes)

// Removing the last item in a array
console.log(notes.pop())

// Removing the first item in a array
console.log(notes.shift())

// Adding the first item in a array
notes.unshift('First Note')

// Length of an array
console.log(notes.length)

// Accessing the array element using index

console.log(notes[1]);

// last element
console.log(notes[notes.length - 1])


const list = ['list 1', 'list 2', 'list 3', 'list 4']
console.log(list)
list.splice(1, 2)

console.log(list)

list.splice(1,0,'New Second element')

console.log(list)

list[2] = 'new list 4'

console.log(list)

