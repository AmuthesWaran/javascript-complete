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
 const ps = document.querySelectorAll('p')
 ps.forEach(function (p){
    // console.log(p.textContent)
    // p.textContent = '*************'
    // p.remove()
 })


 const newParagraph = document.createElement('p')
 newParagraph.textContent = 'This is a new element from Javascript'

 document.querySelector('body').appendChild(newParagraph)

