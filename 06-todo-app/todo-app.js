const todos = [{
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

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p){
//    if(p.innerHTML.includes('the')){
//     p.remove()   
//    }
// })

//  const incompleteTodo = todos.filter(function (todo){
//    return !todo.complete
//  })

//  const summary = document.createElement('h2')
//  summary.textContent = `You have ${incompleteTodo.length} todos left`
//  document.querySelector('body').appendChild(summary)

//  todos.forEach(function (todo) {
//    const p = document.createElement('p')
//    p.textContent = todo.todo
   
//    document.querySelector('body').appendChild(p)
//    console.log(p)
//  })

// document.querySelector('button').addEventListener('click', function(e){
//    console.log('button clicked');
// })


document.querySelector('#addTodo').addEventListener('click', function(e){
   console.log('button clicked');
})