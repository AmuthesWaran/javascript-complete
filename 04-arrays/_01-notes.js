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

list.splice(1, 0, 'New Second element')

console.log(list)

list[2] = 'new list 4'

console.log(list)


//forEach Loop
list.forEach(list => {
    console.log(list)
})


list.forEach(function (list, index) {
    console.log(list, index)
})

// Dynamic for loop using function
// function counting(count) {

    //for loop
    for (let i = 1; i <= 10; i++) {
        console.log(`Counting... ${i}`);;
    }
// }


// counting(10);

console.log(list)
for (let i = 0; i < list.length; i++){
    console.log(list[i]);
}


console.log(list)
for (let i = list.length - 1; i >= 0; i--){
    console.log(list[i]);
}

const notes0 = ['Note1', 'Note2', 'Note3', 'Note4', 'Note5']

console.log(notes0.indexOf('Note2'));
console.log(notes0.indexOf('note2'));


const notes1 = [
    // {}, 
    {
    title: 'My trip',
    body: 'i will be going to office next week'
}, {
    title: 'New hobby',
    body: 'origami'
}, {
    title: 'To buy',
    body: 'A notebook'
}]


// console.log(notes1.indexOf({}))

// let obj1 = {}
// let obj2 = {}

// console.log(obj1 === obj2);

// let obj3 = {}
// let obj4 = obj3

// console.log(obj3 === obj4);


// looks for the first index
// const index = notes1.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'My trip'    
// })

// console.log(index);


// const findNote = function (notes, noteTitle){
//     const index = notes.findIndex(function (note, index){
//         console.log(note.title);
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })

//     if (index >= 0){
//         console.log(notes[index]);
//     }
//     else{
//         console.log('404 Not found');
//     }
// }

const findNote = function (notes, noteTitle){
    return notes.find(function (note, index){
        return note.title === noteTitle
    })
}

const note = findNote(notes1, 'To buy')
console.log(note)