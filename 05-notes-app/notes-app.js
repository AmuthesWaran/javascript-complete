// console.log('this is from script file')

const notes1 = [
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

// DOM - Document Object Model

// Query and Remove
//  const pTag = document.querySelector('p').innerText
//  const pTag = document.querySelector('p')
//  console.log(pTag)
//  pTag.remove()


 // Query all and remove
//  const ps = document.querySelectorAll('p')
//  ps.forEach(function (p){
//     // console.log(p.textContent)
//     // p.textContent = '*************'
//     // p.remove()
//  })


//  const newParagraph = document.createElement('p')
//  newParagraph.textContent = 'This is a new element from Javascript'

//  document.querySelector('body').appendChild(newParagraph)

// Buttons using query selector
// document.querySelector('button').addEventListener('click', function(e){
//    console.log('button is working')
//    console.log(e)
//    e.target.textContent = 'Clicked Button'
// })

// document.querySelectorAll('button')[1].addEventListener('click', function(e){
//    console.log('Remove button')
//    console.log(e)
//    e.target.textContent = 'Clicked Button'
// })

document.querySelector('#createNote').addEventListener('click', function(e) {
   e.target.textContent = 'Create Note Clicked'
})

document.querySelector('#removeNote').addEventListener('click', function(e){
   e.target.textContent = 'Remove Button Clicked'
   // console.log('i');
})

document.querySelector('#removeAllNote').addEventListener('click', function(e){
   document.querySelectorAll('.note').forEach(function (note){
      note.remove()
   })
})

//Examples

// ----Single----
// p
// #using-id
// .using-class

// ----Multiple----
// p#id
// button.class
// h1.class#id
// h1#id.class