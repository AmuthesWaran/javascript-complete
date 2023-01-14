// console.log('this is from script file')

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