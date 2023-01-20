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

const filters ={
   searchText: ''
}

const renderTodo = function(todos, filters){
   const filteredTodo = todos.filter(function (todo){
      return todo.todo.toLowerCase().includes(filters.searchText.toLowerCase())
   })
   const incompleteTodo = filteredTodo.filter(function (todo){
      return !todo.complete
    })
   
    
    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodo.length} todos left`
    document.querySelector('#todos').appendChild(summary)
    
    filteredTodo.forEach(function (todo) {
      
      const p = document.createElement('p')
      p.textContent = todo.todo
      
      document.querySelector('#todos').appendChild(p)
      console.log(p)
    })
}
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

renderTodo(todos, filters)

document.querySelector('#addTodo').addEventListener('click', function(e){
   console.log('button clicked');
})

document.querySelector('#todoText').addEventListener('input', function(e){
   console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function(e){
   filters.searchText = e.target.value
   renderTodo(todos, filters)
})


