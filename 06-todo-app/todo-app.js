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
   searchText: '',
   hideCompleted: false
}

const renderTodo = function(todos, filters){
   let filteredTodo = todos.filter(function (todo){
      return todo.todo.toLowerCase().includes(filters.searchText.toLowerCase())
   })

   filteredTodo = filteredTodo.filter(function (todo){
      if(filters.hideCompleted){
         return !todo.complete
      }
      else{
         return true
      }
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

// document.querySelector('#addTodo').addEventListener('click', function(e){
//    console.log('button clicked');
// })

// document.querySelector('#todoText').addEventListener('input', function(e){
//    console.log(e.target.value)
// })

document.querySelector('#search-text').addEventListener('input', function(e){
   filters.searchText = e.target.value
   renderTodo(todos, filters)
})


document.querySelector('#new-todo').addEventListener('submit', function(e){
   e.preventDefault()
   todos.push({
      todo: e.target.elements.text.value,
      complete: false
   })
   
   renderTodo(todos, filters)
   e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
   filters.hideCompleted = e.target.checked
   renderTodo(todos, filters)
})